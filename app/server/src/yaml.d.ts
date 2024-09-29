// A type to shutup typescript when importing a yaml file
// There should be a propper type for the openapil.yaml
declare module "*.yaml" {
    const content: { [key: string]: any };
    export default content;
}
