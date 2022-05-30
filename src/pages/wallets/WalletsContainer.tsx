import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchRatesThunk, updateRateThunk } from "../../store/slices/rates";
import { fetchWalletsThunk } from "../../store/slices/wallets";
import { Wallets } from "./Wallets";

export function WalletsContainer() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchWalletsThunk())
        dispatch(fetchRatesThunk())
    }, [dispatch])

    const { wallets } = useAppSelector(state => state.wallets);

    const updateRate = async (id: number, value: number) => {
        await dispatch(updateRateThunk({ id, value }))
        await dispatch(fetchWalletsThunk())
        await dispatch(fetchRatesThunk())
    }

    const orderByFavorites = async () => {
        const filters = {orderBy: 'isFavorite'}
        await dispatch(fetchWalletsThunk(filters))
    }

    const fetchWallets = async () => {
        await dispatch(fetchWalletsThunk())
    }

    return (
        <Container>
            {wallets && <Wallets updateRate={updateRate} wallets={wallets} orderByFavorites={orderByFavorites} fetchWallets={fetchWallets} />}
        </Container>
    )
}
