interface ResponseResult {
    "/searchUsers": SearchUsersResult
}

interface SearchUsersResult {
    data: User[]
    success: boolean
}

interface User {
    id: string
    userNo: string
    userName: string
}
