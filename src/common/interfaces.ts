export interface IWallet {
    address: string;
    userId: number;
    isOld: boolean;
    usdeth: number;
    eureth: number;
    eth: string;
    id: number;
    isFavorite: boolean;
    firstTransactionDate: Date;
}

export interface IRate {
    base: string;
    currency: string;
    value: number;
    id: number;
}

export type WalletRateKey = 'usdeth' | 'eureth';

export interface RateDropdownProps {
    handleSelect: (index: string | null) => void,
    rates: Array<IRate>,
    selectedRate: IRate,
    convertedRateValue: number
}

export interface RateFormProps {
    rate: number,
    onChange: (rate:number) => void
}

export interface WalletProps {
    wallet: IWallet,
    rates: Array<IRate>,
    setEditing: (isEditing: boolean) => void,
    cancelEditing: () => void,
    confirmRateChange: () => Promise<void>,
    isEditing: boolean,
    rateLabel: string,
    rateValue: number,
    setRate: (rate: number) => void,
    handleSelect: (index: string | null) => void,
    selectedRate: IRate,
    convertedRateValue: number,
    toggleFavorite: () => void
}

export interface WalletContainerProps {
    wallet: IWallet,
    updateRate: (id: number, value: number) => Promise<void>
}

export interface WalletsProps {
    wallets: Array<IWallet>,
    updateRate: (id: number, value: number) => Promise<void>
    orderByFavorites: () => Promise<void>
    fetchWallets: () => Promise<void>
}

export interface IWalletFilters { 
    orderBy: string
}