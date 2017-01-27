

interface IAtom extends IterableIterator<IAtom>, IterableIterator<IBond> {

    symbol : string,
    atomicNum : number,
    mass : number,

    bonds : IterableIterator<IBond>,

    neighbors : IterableIterator<IAtom>


}