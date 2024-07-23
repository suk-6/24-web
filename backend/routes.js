import clientRoutes from "./client/index.js";
import userRoutes from "./user/index.js";

const routes = (app) => {
    app.use('/', clientRoutes);
    app.use('/client', clientRoutes);
    app.use('/api/user', userRoutes);
};

export default routes;