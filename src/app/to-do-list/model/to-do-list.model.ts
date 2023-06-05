export interface ToDoListModel{
    id: number;
    FirstName: string;
    LastName: string;
    UserName: string;
    Email: string;
    PhoneNumber: string;
    // Image: string;
    Address: string;
    CreatedAt: string;
    UpdatedAt: string;
}

export interface UserInfo{
    id: number;
    FirstName: string;
    LastName: string;
    UserName: string;
    Email: string;
    PhoneNumber: string;
    Address: string;
}

export interface History{
    CreatedAt: string;
    UpdatedAt: string;
}