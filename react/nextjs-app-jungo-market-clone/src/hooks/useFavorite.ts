import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { toast } from "react-toastify";

interface UseFavoriteProps {
    productId: string;
    currentUser?: User | null; 
}

const useFavorite = ({productId, currentUser}: UseFavoriteProps) => {

    const router = useRouter();

    const hasFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        console.log(currentUser?.name, ': Favorite Product @@@@@@', list)
        return list.includes(productId);
    }, [currentUser, productId]);

    const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation(); // event bubbling 막음

        if(!currentUser) {
            toast.warn("먼저 로그인을 해주세요.");
            return
        }

        try {
            let request;

            if(hasFavorite) {
                request = () => axios.delete(`/api/favorites/${productId}`);
            } else {
                request = () => axios.post(`/api/favorites/${productId}`)
            }

            await request();

            router.refresh(); // 좋아요가 사라지거나 생긴 것을 바로 반영하기 위해
            toast.success("성공했습니다.");

        } catch(error) {
            console.log(error);
            toast.error("실패했습니다.");
        }
    }

    return {
        hasFavorite,
        toggleFavorite
    }
}

export default useFavorite;