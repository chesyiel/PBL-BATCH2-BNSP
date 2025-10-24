import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getSiswa = async (req, res) => {
    try {
        const reponse = await prisma.siswa.findMany();
        res.status(200).json(reponse);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getSiswaById = async (req,res) => {
    try {
        const reponse = await prisma.siswa.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json(reponse);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};


export const createSiswa = async (req, res) => {
    const { nama, alamat, tanggal_siswa, jurusan } = req.body;
    try {
        const reponse = await prisma.siswa.create({
            data: {
            nama: nama,
            alamat: alamat,
            tanggal_siswa: new Date(tanggal_siswa),
            jurusan: jurusan
            }
        });
        res.status(200).json(reponse);
    } catch (error) {
        res.status(400).json({ msg: error.message });

    }
 };

 export const updateSiswa = async (req, res) => {
    const { nama, alamat, tanggal_siswa, jurusan } = req.body;
    try {
        const reponse = await prisma.siswa.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                nama: nama,
                alamat: alamat,
                tanggal_siswa: new Date(tanggal_siswa),
                jurusan: jurusan
            }
        });
        res.status(200).json(reponse);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
    };


export const deleteSiswa = async (req, res) => {
    try {
        const reponse = await prisma.siswa.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(200).json(reponse);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};


        