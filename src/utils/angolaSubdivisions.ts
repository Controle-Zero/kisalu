const subdivision = {
    bengo: {
        name: "Bengo",
        counties: [
            "Ambriz",
            "Bula Atumba",
            "Dande",
            "Dembos",
            "Nambuangongo",
            "Pango Aluquém"
        ]
    },
    benguela: {
        name: "Benguela",
        counties: [
            "Balombo",
            "Baía Farta",
            "Benguela",
            "Bocoio",
            "Caimbambo",
            "Catumbela",
            "Chongorói",
            "Cubal",
            "Ganda",
            "Lobito",
        ]
    },
    bie: {
        name: "Bié",
        counties: [
            "Andulo",
            "Camacupa",
            "Catabola",
            "Chinguar",
            "Chitembo",
            "Cuemba",
            "Cunhinga",
            "Cuíto",
            "Nharea"
        ]
    },
    cabinda: {
        name: "Cabinda",
        counties: [
            "Belize",
            "Buco-Zau",
            "Cabinda",
            "Cacongo"
        ]
    },
    cuandoCubango: {
        name: "Cuando-Cubango",
        counties: [
            "Calai",
            "Cuangar",
            "Cuchi",
            "Cuito Cuanavale",
            "Dirico",
            "Mavinga",
            "Menongue",
            "Nancova",
            "Rivungo"
        ]
    },
    cuanzaNorte: {
        name: "Cuanza Norte",
        counties: [
            "Ambaca",
            "Banga",
            "Bolongongo",
            "Cambambe",
            "Cazengo",
            "Golungo Alto",
            "Gonguembo",
            "Lucala",
            "Quiculungo",
            "Samba Caju"
        ]
    },
    cuanzaSul: {
        name: "Cuanza Sul",
        counties: [
            "Amboim",
            "Cassongue",
            "Cela",
            "Conda",
            "Ebo",
            "Libolo",
            "Mussende",
            "Porto Amboim",
            "Quibala",
            "Quilenda",
            "Seles",
            "Sumbe"
        ]
    },
    cunene: {
        name: "Cunene",
        counties: [
            "Cahama",
            "Cuanhama",
            "Curoca",
            "Cuvelai",
            "Namacunde",
            "Ombadja"
        ]
    },
    huambo: {
        name: "Huambo",
        counties: [
            "Bailundo",
            "Cachiungo",
            "Caála",
            "Ecunha",
            "Huambo",
            "Londuimbali",
            "Longonjo",
            "Mungo",
            "Chicala-Choloanga",
            "Chinjenje",
            "Ucuma"
        ]
    },
    huila: {
        name: "Huíla",
        counties: [
            "Caconda",
            "Cacula",
            "Caluquembe",
            "Chiange",
            "Chibia",
            "Chicomba",
            "Chipindo",
            "Cuvango",
            "Humpata",
            "Jamba",
            "Lubango",
            "Matala",
            "Quilengues",
            "Quipungo"
        ]
    },
    luanda: {
        name: "Luanda",
        counties: [
            "Belas",
            "Cacuaco",
            "Cazenga",
            "Ícolo e Bengo",
            "Luanda",
            "Quilamba Quiaxi",
            "Quissama",
            "Talatona",
            "Viana"
        ]
    },
    lundaNorte: {
        name: "Lunda Norte",
        counties: [
            "Cambulo",
            "Capenda-Camulemba",
            "Caungula",
            "Chitato",
            "Cuango",
            "Cuílo",
            "Lóvua",
            "Lubalo",
            "Lucapa",
            "Xá-Muteba"
        ]
    },
    lundaSul: {
        name: "Lunda Sul",
        counties: [
            "Cacolo",
            "Dala",
            "Muconda",
            "Saurimo"
        ]
    },
    malanje: {
        name: "Malanje",
        counties: [
            "Cacuso",
            "Calandula",
            "Cambundi-Catembo",
            "Cangandala",
            "Caombo",
            "Cuaba Nzoji",
            "Cunda-Dia-Baze",
            "Luquembo",
            "Malanje",
            "Marimba",
            "Massango",
            "Mucari",
            "Quela",
            "Quirima"
        ]
    },
    moxico: {
        name: "Moxico",
        counties: [
            "Alto Zambeze",
            "Bundas",
            "Camanongue",
            "Léua",
            "Luau",
            "Luacano",
            "Luchazes",
            "Cameia",
            "Moxico"
        ]
    },
    namibe: {
        name: "Namibe",
        counties: [
            "Bibala",
            "Camucuio",
            "Moçâmedes",
            "Tômbua",
            "Virei"
        ]
    },
    uige: {
        name: "Uíge",
        counties: [
            "Alto Cauale",
            "Ambuíla",
            "Bembe",
            "Buengas",
            "Bungo",
            "Damba",
            "Milunga",
            "Mucaba",
            "Negage",
            "Puri",
            "Quimbele",
            "Quitexe",
            "Sanza Pombo",
            "Songo",
            "Uíge",
            "Zombo"
        ]
    },
    zaire: {
        name: "Zaire",
        counties: [
            "Cuimba",
            "Mabanza Congo",
            "Nóqui",
            "Nezeto",
            "Soio",
            "Tomboco"
        ]
    }
}

export function getAllProvinces() {
    const provincesKeys = Object.keys(subdivision);
    const provinces = provincesKeys.map((provinceKey) => {
        return subdivision[provinceKey as keyof typeof subdivision].name;
    })
    return provinces;
}

export function getAllCountiesFromProvince(province: keyof typeof subdivision) {
    return subdivision[province].counties;
}