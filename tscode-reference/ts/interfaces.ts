interface Employee {
    name: string
    id: number
    isManager: boolean
    getUniqueId: () => string
}

const saranga : Employee = {
    name: "TDB Saranga",
    id: 561,
    isManager: true,
    getUniqueId: function ():string {
        return `id_${saranga.id}`
    }
}

console.log(saranga.getUniqueId())