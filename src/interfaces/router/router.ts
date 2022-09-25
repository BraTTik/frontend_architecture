type Path = string;

export interface IRouter {
    readonly location: string;
    redirect(path: Path): void;
}
