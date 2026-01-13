import { createContext, useContext, useState } from "react";

const MembershipContext = createContext()

export const MembershipProvider = ({children}) => {
    const [joinedTeams, setJoinedTeams] = useState([])

    const joinTeam = (teamId) => {
        if (!joinedTeams.includes(teamId)) {
            setJoinedTeams([...joinedTeams, teamId])
        }
    }

    const isMemberOf = (teamId) => {
        return joinedTeams.includes(teamId)
    }
    return (
        <MembershipContext.Provider value={{joinedTeams, joinTeam, isMemberOf}}>
            {children}
        </MembershipContext.Provider>
    )
}

export const useMembership = () => useContext(MembershipContext)