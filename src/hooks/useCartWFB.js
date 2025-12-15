import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "./useCart";


export function useCartWithFirestore(user) {
    const { cart, addItem, removeItem, total, setCart } = useCart();


    const checkout = async () => {
        if (!user) throw new Error("AUTH_REQUIRED");


        await addDoc(collection(db, "quotes"), {
            userId: user.uid,
            items: cart,
            total,
            createdAt: serverTimestamp(),
        });


        setCart([]);
    };


    return { cart, addItem, removeItem, total, checkout };
}