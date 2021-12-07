

interface UserShortData {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    email: string;
}

type Role = "Administrator" | "Standard";

type Status = "request" | "pending" | "approved" | "declined" | "invited";

export interface Invite {
    id: number;
    phone: string;
    role: Role;
}


export interface TeamMember {
    id: number;
    status: Status;
    user: UserShortData;
    role: Role;
}

const UseAppData = () =>{

const invite:Invite[] = [
    {
        id: 1,
        phone: '+353 1234567',
        role: "Administrator"
    },
    {
        id: 2,
        phone: '+353 1234567',
        role: "Standard"
    },
    {
        id: 3,
        phone: '+353 1234567',
        role: "Standard"
    },
]


const teamMember:TeamMember[] = [
    {
        id: 1,
        status: "approved",
        user: {
            id: 1,
            email: 'sdsfs',
            lastName: 'Bloggs',
            name: 'Joespeh',
            phone: 'sdfsdfsdf'
        },
        role: "Standard"

    },
    {
        id: 2,
        status: "approved",
        user: {
            id: 2,
            email: 'sdsfs',
            lastName: 'Bloggs',
            name: 'Joespeh',
            phone: 'sdfsdfsdf'
        },
        role: "Standard"

    },
    {
        id: 3,
        status: "approved",
        user: {
            id: 3,
            email: 'sdsfs',
            lastName: 'Bloggs',
            name: 'Joespeh',
            phone: 'sdfsdfsdf'
        },
        role: "Standard"

    },
    {
        id: 4,
        status: "approved",
        user: {
            id: 4,
            email: 'sdsfs',
            lastName: 'Bloggs',
            name: 'Joespeh',
            phone: 'sdfsdfsdf'
        },
        role: "Standard"

    },
    {
        id: 5,
        status: "approved",
        user: {
            id: 5,
            email: 'sdsfs',
            lastName: 'Bloggs',
            name: 'Joespeh',
            phone: 'sdfsdfsdf'
        },
        role: "Standard"

    },
    {
        id: 6,
        status: "approved",
        user: {
            id: 6,
            email: 'sdsfs',
            lastName: 'Bloggs',
            name: 'Joespeh',
            phone: 'sdfsdfsdf'
        },
        role: "Standard"

    },
    {
        id: 7,
        status: "approved",
        user: {
            id: 7,
            email: 'sdsfs',
            lastName: 'Bloggs',
            name: 'Joe',
            phone: 'sdfsdfsdf'
        },
        role: "Administrator"

    },
    {
        id: 8,
        status: "approved",
        user: {
            id: 8,
            email: 'sdsfs',
            lastName: 'Connors',
            name: 'Sarah',
            phone: 'sdfsdfsdf'
        },
        role: "Administrator"

    }
]

return {invite, teamMember}

}

export default UseAppData