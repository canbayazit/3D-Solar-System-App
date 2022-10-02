import { useBounds } from "@react-three/drei"

function SelectToZoom({ children }) {
    const api = useBounds()
    return (
      <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).clip().fit())} >
        {children}
      </group>
    )
  };

export default SelectToZoom;