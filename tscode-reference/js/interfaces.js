var saranga = {
    name: "TDB Saranga",
    id: 561,
    isManager: true,
    getUniqueId: function () {
        return "id_" + saranga.id;
    }
};
console.log(saranga.getUniqueId());
