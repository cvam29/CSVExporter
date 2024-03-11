// types.ts

export interface User {
    user_id: string;
    team_id?: string;
    isAuthenticated: boolean;
    permissionLevel?: string;
    email?: string;
}
  