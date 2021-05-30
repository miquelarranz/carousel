module.exports = {
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ['<rootDir>/src/**/__tests__/**/*.{ts,tsx}', '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	coverageDirectory: './coverage',
	watchPathIgnorePatterns: ['/node_modules/'],
};
