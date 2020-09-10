export const SORTED_BY = {
    ID: 0,
    FIRST_NAME:1,
    LAST_NAME:2,
    EMAIL:3,
    PHONE:4
}

export const tableConfig = [
    {
        width:"5%",
        name: "id",
        sortedBy: SORTED_BY.ID,
        onIncrease: true
    },{
        width:"15%",
        name: "firstName",
        sortedBy: SORTED_BY.FIRST_NAME,
        onIncrease: true
    },{
        width:"15%",
        name: "lastName",
        sortedBy: SORTED_BY.LAST_NAME,
        onIncrease: true
    },{
        width:"30%",
        name: "email",
        sortedBy: SORTED_BY.EMAIL,
        onIncrease: true
    },{
        width:"20%",
        name: "phone",
        sortedBy: SORTED_BY.PHONE,
        onIncrease: true
    }
];
