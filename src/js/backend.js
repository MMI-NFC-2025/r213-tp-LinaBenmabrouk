export async function getOffre(id) {
    try {
        const data = await db.collection('maison').getOne(id);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function setFavori(house) {
    await db.collection('maison').update(house.id, {favori: !house.favori});
}
