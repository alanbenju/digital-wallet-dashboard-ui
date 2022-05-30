import { useState, useEffect } from "react";
import { WalletContainerProps, WalletRateKey } from "../../../common/interfaces";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleFavoriteThunk } from "../../../store/slices/wallets";
import { Wallet } from "./Wallet";

export function WalletContainer(props: WalletContainerProps) {
    const { wallet, updateRate } = props

    const { rates } = useAppSelector(state => state.rates);

    const [isEditing, setEditing] = useState(false);
    const [rateValue, setRate] = useState(rates[0].value); // Value to be edited
    const [selectedRate, setSelectedRate] = useState(rates[0]);
    const [rateLabel, setRateLabel] = useState(`1 ${selectedRate.currency}: ${rateValue} ${selectedRate.base}`);

    const rateKey = selectedRate.base.toLowerCase() + '' + selectedRate.currency.toLowerCase();
    const [convertedRateValue, setConvertedRateValue] = useState(wallet[rateKey as WalletRateKey]);

    const cancelEditing = () => {
        setRate(selectedRate.value);
        setEditing(false)
    }

    const confirmRateChange = async () => {
        await updateRate(selectedRate.id, rateValue)
        setEditing(false)
    }

    const handleSelect = (index: string | null) => {
        const newSelectedRate = rates[Number(index)];
        setSelectedRate(newSelectedRate)
        setRate(newSelectedRate.value)
    }

    useEffect(() => {
        setRateLabel(`1 ${selectedRate.currency} : ${rateValue} ${selectedRate.base}`)
    }, [selectedRate, rateValue])

    useEffect(() => {
        const rateKey = selectedRate.base.toLowerCase() + '' + selectedRate.currency.toLowerCase()
        setConvertedRateValue(wallet[rateKey as WalletRateKey])
    }, [selectedRate, wallet])

    const dispatch = useAppDispatch();

    const toggleFavorite = async () => {
        await dispatch(toggleFavoriteThunk(wallet.id))
    }

    return (
        <>
            {rates && 
            <Wallet
                wallet={wallet}
                rates={rates}
                isEditing={isEditing}
                rateLabel={rateLabel}
                convertedRateValue={convertedRateValue}
                cancelEditing={cancelEditing}
                confirmRateChange={confirmRateChange}
                handleSelect={handleSelect}
                selectedRate={selectedRate}
                setRate={setRate}
                setEditing={setEditing}
                rateValue={rateValue}
                toggleFavorite={toggleFavorite}

            />}
        </>
    )
}

