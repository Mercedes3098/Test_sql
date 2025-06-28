import pool from './database.js';

async function getTelefonos() {
    try {
        const [rows] = await pool.query('SELECT nombre, apellido, telefono FROM paciente');

        console.log("\n--- Listado de Teléfonos de Pacientes ---");
        if (rows.length > 0) {
            rows.forEach(paciente => {
                console.log(`Nombre: ${paciente.nombre} ${paciente.apellido}, Teléfono: ${paciente.telefono}`);
            });
        } else {
            console.log("No se encontraron pacientes en la base de datos.");
        }
        return rows;
    } catch (error) {
        console.error("Error al obtener teléfonos de pacientes:", error);
        throw error;
    }
}

async function getTelefonoPaciente(nro_historial_clinico) {
    try {
        const [rows] = await pool.query('SELECT telefono FROM paciente WHERE nro_historial_clinico = ?', [nro_historial_clinico]);

        console.log(`\n--- Teléfono del Paciente con Historial ${nro_historial_clinico} ---`);
        if (rows.length > 0) {
            console.log(`Teléfono: ${rows[0].telefono}`);
            return rows[0].telefono;
        } else {
            console.log(`No se encontró ningún paciente con el número de historial: ${nro_historial_clinico}`);
            return null;
        }
    } catch (error) {
        console.error(`Error al obtener el teléfono para el historial ${nro_historial_clinico}:`, error);
        throw error;
    }
}

async function getMedicosPaciente(nro_historial_clinico) {
    try {
        const query = `
            SELECT DISTINCT
                m.nombre AS medico_nombre,
                m.apellido AS medico_apellido,
                m.especialidad
            FROM
                paciente p
            INNER JOIN
                ingreso i ON p.nro_historial_clinico = i.nro_historial_paciente
            INNER JOIN
                medico m ON i.matricula_medico = m.matricula
            WHERE
                p.nro_historial_clinico = ?;
        `;
        const [rows] = await pool.query(query, [nro_historial_clinico]);

        console.log(`\n--- Médicos que atendieron al Paciente con Historial ${nro_historial_clinico} ---`);
        if (rows.length > 0) {
            rows.forEach(medico => {
                console.log(`Médico: ${medico.medico_nombre} ${medico.medico_apellido}, Especialidad: ${medico.especialidad}`);
            });
        } else {
            console.log(`No se encontraron médicos para el paciente con el número de historial: ${nro_historial_clinico} o el paciente no tiene ingresos registrados.`);
            return [];
        }
    } catch (error) {
        console.error(`Error al obtener médicos para el historial ${nro_historial_clinico}:`, error);
        throw error;
    }
}

async function runAllQueries() {
    try {
        await getTelefonos();
        await getTelefonoPaciente(675);
        await getMedicosPaciente(1488);
    } catch (error) {
        console.error("Se produjo un error durante la ejecución de las consultas:", error);
    } finally {
        if (pool) {
            await pool.end();
            console.log("\nConexión a la base de datos cerrada.");
        }
    }
}

runAllQueries();