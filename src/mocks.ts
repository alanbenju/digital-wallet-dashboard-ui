export const walletsMock = [
    {
        address: "0x123",
        userId: 1,
        isOld: true,
        usdeth: 1000,
        eureth: 2000,
        eth: '1',
        id: 1,
        isFavorite: true,
        firstTransactionDate: new Date()
    },
    {
        address: "0x124",
        userId: 2,
        isOld: false,
        usdeth: 2000,
        eureth: 4000,
        eth: '2',
        id: 2,
        isFavorite: false,
        firstTransactionDate: new Date()
    }
]

export const ratesMock = [
    {
        base: 'usd',
        currency: 'eth',
        value: 1000,
        id: 1
    },
    {
        base: 'eth',
        currency: 'eth',
        value: 2000,
        id: 2
    }
]