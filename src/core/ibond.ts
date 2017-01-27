

enum BondOrder {
    SINGLE,
    DOUBLE,
    TRIPLE,
    AROMATIC
}

interface IBond extends IterableIterator<IAtom> {
    order : BondOrder,
    atom1 : IAtom,
    atom2 : IAtom,

    
}