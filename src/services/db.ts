import mongoose from 'mongoose';

export const initDBConnection = async () => {
    const { DATABASE_URL } = process.env;
    if (!DATABASE_URL) {
        throw new Error('DATABASE_URL env var is missing');
    }

    await mongoose.connect(DATABASE_URL);

    mongoose.connection.on('error', (error) => {
        console.error(error);
    });
    mongoose.connection.once('open', () => {
        console.log('Connected to database');
    });
};
