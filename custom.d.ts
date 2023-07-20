declare module "*.webm" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.otf" {
  const value: any;
  export default value;
}

declare module "*.ico" {
  const value: any;
  export default value;
}

declare module "*.m.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.m.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.ttf" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const name: string;
  export = name;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}
