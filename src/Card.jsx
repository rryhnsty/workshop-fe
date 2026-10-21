function card(judul, children) {
    return(
        <div className="p-4 rounded shadow">
            <h2 className="font-bold">{judul}</h2>
            {children}
        </div>
    );
}

export default card;