import { HeaderFixedButtonLayout } from "../../components/common/layout";
import KindFillterComponent from "../../components/kind/fillterButton";
import KindListComponent from "../../components/kind/list";

export default function KindPage(){
    return (
        <HeaderFixedButtonLayout headerTitle={"내과"} headerBack={true} headerCancel={false}>
            <KindFillterComponent />
            <KindListComponent />
        </HeaderFixedButtonLayout>
    )
}