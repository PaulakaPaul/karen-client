type UserRole = 'user' | 'admin'

export interface JwtPayload {
    sub: string, // GUID
    name: string,
    role: UserRole,
    exp: number, //expiration timestamp
    userId: string
}