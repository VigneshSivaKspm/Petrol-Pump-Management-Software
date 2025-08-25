

export const GreenButton = ({ onClick, name, isLoading }) => {
    return (
        <button type="submit" onClick={onClick ? onClick : null} disabled={isLoading ? true : false} className="bg-[#0F79B9] hover:bg-[#71bdec] px-20 py-2 rounded font-medium     text-white">{name}</button>
    );
};
