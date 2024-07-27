export type authStore = {
    model: {
        token: string,
        id: string,
        email: string,
        username: string, 
        avatar: string,
        validVerified: boolean,
        postr_plus: boolean,
        ActiveDevices: string[], 
    },
    login: (emailOrUsername: string, password: string) => Promise<authStore["model"]>,
    isValid: () => boolean,
}