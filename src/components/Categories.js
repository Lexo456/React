function Categories({setActiveCategory, activeCategory, categories}) {
        return (
            <div>
                <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                >
                    <option value=''>---</option>
                    {categories.map((cat) => (
                                <option value={cat} key={cat}>{cat}
                                </option>))}
                </select>
                <button onClick={()=>setActiveCategory('')}>Réinitialiser</button>
            </div>
    )
}

export default Categories