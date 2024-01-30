import express from 'express';
const router = express.Router()

import { users, search, searchApi } from '../controllers/user.js'
import { validation, getProfile, updateProfile } from '../controllers/form.js';
import { convert, getTemperature, poll } from '../controllers/weather.js';
import { contacts } from '../controllers/contacts.js';

router.get('/users', users)
router.post('/search', search)
router.post('/search/api', searchApi)

router.post('/contact/email', validation)
router.get('/profile/:id/edit', getProfile)
router.put('/profile/:id', updateProfile)

router.post('/convert', convert)
router.get('/get-ttemperature', getTemperature)
router.get('/poll', poll)

router.post('/contacts', contacts)

export default router