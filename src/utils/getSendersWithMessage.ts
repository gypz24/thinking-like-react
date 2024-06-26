import { SenderWithMessage } from "./types";
 
function getSendersWithMessage() {
    const newMessages: SenderWithMessage[] = [
        {
            id: "406ada9a-e7f7-458f-b22c-a153363c25d9",
            name: "Mona_Schowalter",
            imageUrl: "https://avatars.githubusercontent.com/u/28850700",
            messages: [
                {
                    id: "9fa48bfd-a044-4901-953f-cf6f13e3e1f9",
                    message: "Esse vel constans vulgaris defetiscor autus thorax.",
                    seen: false,
                    createdAt: new Date(2024, 2, 1),
                }
            ]
        },
        {
            id: "8b7bc978-daad-4593-8fca-050797d04a4a",
            name: "Nikita_Ledner",
            imageUrl: "https://avatars.githubusercontent.com/u/63999420",
            messages: [
                {
                    id: "fc530e2e-f5fa-4688-9f2c-d8cf7f70aa18",
                    message: "Velut distinctio canto cena caveo.",
                    seen: false,
                    createdAt: new Date(2024, 1, 17),
                }
            ]
        },
        {
            id: "b1e75fad-4fc4-4067-b89d-20684a74d0b7",
            name: "Einar_Kerluke",
            imageUrl: "https://avatars.githubusercontent.com/u/7050472",
            messages: [
                {
                    id: "d43cca31-862d-42da-885c-2766c1abe426",
                    message: "Cognomen defaeco cuius basium quidem verumtamen ocer tamdiu tempore.",
                    seen: false,
                    createdAt: new Date(2024, 1, 1),
                }
            ]
        }
    ]
    return newMessages;
}
 
export default getSendersWithMessage;