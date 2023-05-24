import React, { useEffect, useState } from 'react'
import { getcadexperience, addcadexperience } from '../Service/ApiService';
import CadExperienceAdd from './CadExperienceAdd'

function CadExperienceList() {
    const [ cadExperiences, setCadExperiences ] = useState([]);
    const [ showCadExperiencesForm, setShowCadExperiencesForm ] = useState(false);
    
    useEffect(() => {
        let mount = true
        getcadexperience()
        .then(res => {
            setCadExperiences(res)
            return() => mount = false
        })
    }, [])

    const handleAddSubmit = (e) => {
        addcadexperience(e.target)
        .then(res => {
            setCadExperiences([res])
        })
    }

    function handleCancelButton() {
        setShowCadExperiencesForm(false)
    }

    return (
        <>
            <h3>Lista de Usuários</h3>
            <table border={"2px"} cellPadding={"5px"} align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Grau de Escolaridade</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {cadExperiences.map(cadExperience => {
                        return(
                        <tr key={cadExperience.cadexperience_id}>
                            <td>{cadExperience.cadexperience_id}</td>
                            <td>{cadExperience.cadexperience_first_name}</td>
                            <td>{cadExperience.cadexperience_last_name}</td>
                            <td>{cadExperience.cadexperience_degree}</td>
                            <td>Edit | Delete</td>
                        </tr>
                        )})}                 
                </tbody>
            </table>
            <button onClick={() => setShowCadExperiencesForm(true)}>Adicionar Usuário</button>
            {showCadExperiencesForm && <CadExperienceAdd handleAddSubmit={handleAddSubmit} handleCancelButton={handleCancelButton} />}
        </>
  )
}

export default CadExperienceList