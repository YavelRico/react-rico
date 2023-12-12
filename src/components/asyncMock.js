import Tradicional from './assets/tradicional.jpg';
import Digital from './assets/digital.png';
import Modelaje from './assets/modelaje.png';
import Serv from './assets/serv.png';

const products = [
    {
        id: 'Tradicional',
        name: 'Dibujo Tradicional',
        description: 'USD$ 15',
        image: Tradicional,
        category: 'Tradicional',
    },
    {
        id: 'Digital',
        name: 'Dibujo Digital',
        description: 'USD$ 20',
        image: Digital,
        category: 'Digital',
    },
    {
        id: 'Modelaje',
        name: 'Modelaje 3D',
        description: 'USD$120',
        image: Modelaje,
        category: 'Modelaje',
    },
    {
        id: 'Serv',
        name: 'Contratar por hora',
        description: 'USD$ 20',
        image: Serv,
        category: 'Servicios',
    },
];

export default products;

export async function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

export async function getProductsByCategory(category) {
    const filteredProducts = products.filter((product) => product.category === category);

    if (filteredProducts.length === 0) {
        throw new Error('No se encontraron productos en esta categoría.');
    }

    return filteredProducts;
}

export async function getProductsById(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === productId);
            if (product) {
                resolve(product);
            } else {
                reject(new Error('Producto no encontrado.'));
            }
        }, 1000);
    });
}
