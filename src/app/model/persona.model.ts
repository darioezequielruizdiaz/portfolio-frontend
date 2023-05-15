export class Persona {
    id?: number;
    nombrePersona: string;
    puestoPersona: string;
    ubicacionPersona: string;
    imgPersona: string;
    imgFondo: string;
    sobreMi: string;
    telPersona: number;
    emailPersona: string;
    githubPersona: string;
    linkedinPersona: string;

    constructor(nombrePersona: string, puestoPersona: string, ubicacionPersona: string, imgPersona: string, imgFondo: string, sobreMi: string, telPersona: number, emailPersona: string, githubPersona: string, linkedinPersona: string) {
        this.nombrePersona = nombrePersona;
        this.puestoPersona = puestoPersona;
        this.ubicacionPersona = ubicacionPersona;
        this.imgPersona = imgPersona;
        this.imgFondo = imgFondo;
        this.sobreMi = sobreMi;
        this.telPersona = telPersona;
        this.emailPersona = emailPersona;
        this.githubPersona = githubPersona;
        this.linkedinPersona = linkedinPersona;
    }
    
}