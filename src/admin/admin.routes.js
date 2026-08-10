import express from 'express';
import { authenticationMiddleware } from '../auth/auth-middleware.js';
import { authorize } from '../authorization.js';
import { asyncControllerHandler } from '../async-controller-handler.js';
import { getUsersController } from './admin.controllers.js';
import { banUserController } from './admin.controllers.js';
export const adminRoutes = express.Router();
adminRoutes.get('/users', authenticationMiddleware, authorize("admin"), asyncControllerHandler(getUsersController));
adminRoutes.delete('/users/:id', authenticationMiddleware, authorize("admin"), asyncControllerHandler(banUserController));