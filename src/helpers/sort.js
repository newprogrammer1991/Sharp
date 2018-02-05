export default (transactions, order, orderBy) => {
    const sorted = order == 'desc'
        ? transactions.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : transactions.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));
    return sorted
}
