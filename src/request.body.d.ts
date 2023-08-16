interface RequestBody {
    "/searchUsers": SearchUsers
}

interface SearchUsers {
    pageNo: number
    pageSize: number
    userNo: string
}
