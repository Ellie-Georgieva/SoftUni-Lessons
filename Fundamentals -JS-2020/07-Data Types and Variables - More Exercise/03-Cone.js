function cone(coneRadiusInput, heightInput) {
    const r = coneRadiusInput;
    const h = heightInput;

    const volume = (Math.PI * (r * r) * h) / 3;
    const baseArea = Math.PI * (r * r);
    const formingCone = Math.sqrt((r * r) + (h * h));
    const surfaceArea = Math.PI * r * formingCone;
    const totalSurfaceArea = baseArea + surfaceArea;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}

cone(3, 5);
cone(3.3, 7.8);