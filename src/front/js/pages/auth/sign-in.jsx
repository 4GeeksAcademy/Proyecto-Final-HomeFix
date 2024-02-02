import React, { useContext, useState } from "react";
import sign from '@img/login.png';
import { Context } from '../../store/appContext';
import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Alert } from "@material-tailwind/react";


function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

export function SignIn() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const login = async () => {


    try {
      const response = await actions.setToken(email, password);

      if (response && response.status === 200) {
        setEmail('');
        setPassword('');
        setSuccessMessage('¡Inicio de sesión exitoso!'); 

        navigate("/home");
      } else {
        setError('¡Email o contraseña incorrectos! Por favor, intenta de nuevo.');
      }
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setError('¡Email o contraseña incorrectos! Por favor, intenta de nuevo.');
    }
  }




  return (
    <section className="m-8 flex gap-4 h-[80%]">
      <div className="w-full lg:w-3/5 mt-12">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Inicio de Sesion</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingresa tu email y contraseña para ingresar</Typography>
        </div>
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">

            <div>
              <Input
                size="lg"
                type="email"
                label="name@mail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

            </div>
            <div >
              <Input
                size="lg"
                type="password" label="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex items-center gap-1 font-normal"

              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Usa al menos 8 caracteres, una mayúscula, una minúscula y un número.
              </Typography>
            </div>

          </div>
          
          {/* {error && <p className="text-red-500">{error}</p>} */}
          {error && <Alert icon={<Icon />}>{error}</Alert>
          }

          <Button onClick={login} className="mt-6" fullWidth>
            Sign In
          </Button>

          <div className="flex items-center justify-between gap-2 mt-6">
            <div></div>
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">
                Olvidé la contraseña
              </a>
            </Typography>
          </div>
          <div className="space-y-4 mt-8">
            {/* <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in With Google</span>
            </Button> */}
            {/* <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
              <span>Sign in With Twitter</span>
            </Button> */}
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            No estas registrado?{" "}
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">Crear una cuenta</Link>
          </Typography>
        </form>

      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src={sign}
          className=" h-[50em] rounded-3xl"
        />
      </div>

    </section>
  );
}

export default SignIn;
