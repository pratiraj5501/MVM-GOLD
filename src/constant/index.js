const ROUTES = {
    HOME: "/",
    GIFTING: "/gifting",
    COLLECTIONS: "/collections",
    GALLERY: "/gallery",
    BLOG: "/blog",
    PRODUCTS: "/products",
    PRODUCTVIEW: "/productview",
    GALLERYVIEW: "/galleryview",

    ABOUT: "/about",
    CONTACT: "/contact",
};

const NAV_LINKS = [
    { name: "Home", path: ROUTES.HOME },
    { name: "Gifting", path: ROUTES.GIFTING },
    { name: "Collections", path: ROUTES.COLLECTIONS },
    { name: "Gallery", path: ROUTES.GALLERY },
    { name: "GalleryView", path: ROUTES.GALLERYVIEW },

    { name: "Blog", path: ROUTES.BLOG },
    { name: "Product", path: ROUTES.PRODUCTS },
    { name: "Productview", path: ROUTES.PRODUCTVIEW },

    { name: "About Us", path: ROUTES.ABOUT },
    { name: "Contact Us", path: ROUTES.CONTACT },
];

export { ROUTES, NAV_LINKS };
