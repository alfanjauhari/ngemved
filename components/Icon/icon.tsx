import { forwardRef, SVGAttributes } from 'react';

export type SVGIconProps = SVGAttributes<SVGElement> & {
  icon: 'star' | 'america' | 'europa';
};
export const Icon = forwardRef<SVGSVGElement, SVGIconProps>(
  ({ icon, ...props }, ref) => {
    switch (icon) {
      case 'star':
        return (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            {...props}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        );
      case 'europa':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            {...props}
          >
            <path
              d="M12 0v24c6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
              fill="#214391"
            />
            <path
              d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s6.627-24 0-24z"
              fill="#2B479D"
            />
            <path
              d="M11.98 2.081l.292.9h.947l-.766.558.293.9-.767-.557-.766.557.293-.9-.767-.557h.948l.292-.901zM11.98 19.086l.292.9h.947l-.766.558.293.9-.767-.556-.766.556.293-.9-.767-.557h.948l.292-.901zM16.646 3.588l.293.901h.947l-.766.557.293.9-.767-.556-.766.557.293-.9-.767-.558h.948l.292-.9zM19.83 6.73l.293.9h.947l-.766.557.293.901-.767-.557-.766.557.293-.9-.767-.558h.948l.293-.9zM19.906 14.667l.293.9h.947l-.766.558.293.9-.767-.556-.766.556.293-.9-.767-.557h.947l.293-.901zM4.244 6.73l.292.9h.947l-.766.557.293.901-.766-.557-.767.557.293-.9-.766-.558h.947l.293-.9zM20.568 10.515l.293.9h.947l-.766.557.293.901-.767-.556-.766.556.293-.9-.767-.557h.948l.292-.901zM3.52 10.515l.292.9h.948l-.767.557.293.901-.766-.556-.767.556.293-.9-.766-.557h.947l.293-.901zM4.14 14.667l.293.9h.948l-.767.558.293.9-.766-.556-.766.556.292-.9-.766-.557h.947l.293-.901zM16.784 17.942l.292.9h.948l-.767.558.293.9-.766-.556-.767.557.293-.901-.766-.557h.947l.293-.9zM7.464 3.588l.292.901h.948l-.767.557.293.9-.766-.556-.767.557.293-.9-.766-.558h.947l.293-.9zM7.118 17.884l.293.902h.947l-.766.556.292.9-.766-.555-.766.556.292-.9-.766-.557h.947l.293-.902z"
              fill="#F8D12E"
            />
          </svg>
        );

      case 'america':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            {...props}
          >
            <g clipPath="url(#prefix__clip0)">
              <path
                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                fill="#FC4581"
              />
              <path
                d="M18.4 1.848H5.6A11.924 11.924 0 0111.794.002h.413A11.925 11.925 0 0118.4 1.848z"
                fill="#DB1B1B"
              />
              <path
                d="M20.66 3.694H3.34l.034-.036A12.42 12.42 0 014.746 2.44c.275-.209.562-.407.854-.592h12.8a11.997 11.997 0 012.26 1.846z"
                fill="#fff"
              />
              <path
                d="M22.114 5.54H1.886a11.987 11.987 0 011.453-1.846h17.322c.543.567 1.03 1.185 1.453 1.846z"
                fill="#DB1B1B"
              />
              <path
                d="M23.08 7.385H.92a12 12 0 01.874-1.7c.03-.046.06-.096.093-.145h20.227c.375.586.698 1.203.966 1.845z"
                fill="#fff"
              />
              <path
                d="M23.678 9.231H.321c.067-.286.145-.567.235-.844.107-.341.229-.675.365-1.001h22.16c.249.598.449 1.215.597 1.845z"
                fill="#DB1B1B"
              />
              <path
                d="M23.965 11.077H.035c.047-.622.143-1.24.287-1.846h23.356c.144.607.24 1.224.287 1.846z"
                fill="#fff"
              />
              <path
                d="M24 12c0 .31-.012.618-.035.923H.035A12.027 12.027 0 010 12v-.598c0 .016.004.031.013.044 0-.032.002-.064.004-.096.005-.092.011-.182.018-.273h23.93c.023.305.035.612.035.923z"
                fill="#DB1B1B"
              />
              <path
                d="M23.965 12.923a11.894 11.894 0 01-.287 1.846H.322a11.898 11.898 0 01-.287-1.846h23.93z"
                fill="#fff"
              />
              <path
                d="M23.678 14.769c-.148.63-.348 1.248-.598 1.845H.92C.67 16.017.47 15.4.32 14.77h23.357z"
                fill="#DB1B1B"
              />
              <path
                d="M23.08 16.614c-.267.643-.59 1.26-.966 1.846H1.886a11.909 11.909 0 01-.966-1.846h22.16z"
                fill="#fff"
              />
              <path
                d="M22.114 18.46c-.423.661-.91 1.28-1.453 1.846H3.34a12.064 12.064 0 01-1.453-1.846h20.228z"
                fill="#DB1B1B"
              />
              <path
                d="M20.66 20.306a12.054 12.054 0 01-2.26 1.846H5.6a12.053 12.053 0 01-2.26-1.846h17.32z"
                fill="#fff"
              />
              <path
                d="M18.4 22.152A11.927 11.927 0 0112.235 24h-.47a11.927 11.927 0 01-6.167-1.846l12.802-.002z"
                fill="#DB1B1B"
              />
              <path
                d="M12.89.033v12.89H.036A12.048 12.048 0 010 12v-.598c0 .016.004.031.013.044 0-.032.002-.064.004-.096a11.906 11.906 0 011.778-5.663l.094-.147c.171-.267.353-.527.544-.779.281-.373.584-.73.906-1.067l.035-.036A12.42 12.42 0 014.746 2.44 12.368 12.368 0 016.3 1.438 11.924 11.924 0 0111.793.002h.414c.23.003.457.014.684.03z"
                fill="#3E436D"
              />
              <path
                d="M11.503.769l.164.504a.085.085 0 00.081.06h.533a.085.085 0 01.047.154l-.43.312a.084.084 0 00-.03.094l.163.505a.086.086 0 01-.032.094.085.085 0 01-.099 0l-.43-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.13-.094l.164-.505a.086.086 0 00-.031-.094l-.43-.312a.086.086 0 01-.03-.096.085.085 0 01.08-.058h.531a.085.085 0 00.081-.06L11.34.77a.085.085 0 01.082-.061.085.085 0 01.082.06zM5.804 1.848a.087.087 0 000 .047l.165.504a.085.085 0 01-.132.094l-.43-.312a.085.085 0 00-.1 0l-.43.312a.085.085 0 01-.133-.054 12.368 12.368 0 011.554-1.002.086.086 0 01-.033.047l-.43.312a.087.087 0 00-.03.052zM11.503 4.698l.164.505a.084.084 0 00.081.058h.533a.086.086 0 01.05.155l-.43.312a.084.084 0 00-.03.094l.162.506a.085.085 0 01-.131.094l-.43-.313a.086.086 0 00-.1 0l-.43.313a.085.085 0 01-.131-.094l.164-.505a.086.086 0 00-.03-.094l-.43-.312a.085.085 0 01.05-.155h.53a.085.085 0 00.082-.058l.164-.506a.085.085 0 01.162 0zM8.472 4.698l.164.505a.085.085 0 00.08.059h.532a.085.085 0 01.05.154l-.43.312a.085.085 0 00-.03.094L9 6.328a.085.085 0 01-.13.094l-.43-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.13-.094l.164-.505a.085.085 0 00-.031-.094l-.43-.312a.085.085 0 01.05-.155h.53a.085.085 0 00.08-.058l.165-.505a.085.085 0 01.164-.001zM3.234 5.416l-.17.124-.26.187a.085.085 0 00-.03.094l.165.507a.086.086 0 01-.131.094l-.43-.313a.086.086 0 00-.1 0l-.43.313a.086.086 0 01-.131-.094l.165-.505a.087.087 0 00-.031-.094l-.058-.041.094-.147c.171-.267.353-.527.544-.779l.142.441a.085.085 0 00.082.06h.532a.086.086 0 01.047.153zM11.503 8.7l.164.505a.086.086 0 00.081.059h.533a.086.086 0 01.081.112.085.085 0 01-.03.042l-.43.312a.085.085 0 00-.031.094l.164.505a.085.085 0 01-.033.094.086.086 0 01-.099 0l-.429-.312a.086.086 0 00-.1 0l-.43.312a.086.086 0 01-.131-.094l.164-.505a.086.086 0 00-.03-.094l-.43-.312a.085.085 0 01-.031-.095.085.085 0 01.08-.059h.532a.086.086 0 00.08-.059l.165-.505a.086.086 0 01.16 0zM8.472 8.7l.164.506a.085.085 0 00.08.058h.532a.085.085 0 01.05.154l-.43.313a.085.085 0 00-.03.093l.162.507a.085.085 0 01-.13.094l-.43-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.1 0 .085.085 0 01-.032-.094l.165-.505a.085.085 0 00-.031-.094l-.43-.312a.085.085 0 01.05-.154h.53a.085.085 0 00.082-.059l.164-.505a.085.085 0 01.164-.002zM5.44 8.7l.164.506a.086.086 0 00.081.058h.532a.085.085 0 01.05.154l-.43.313a.086.086 0 00-.031.093l.164.506a.085.085 0 01-.13.093l-.43-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.132-.093l.164-.506a.084.084 0 00-.03-.093l-.429-.313a.085.085 0 01.047-.154h.531a.085.085 0 00.081-.058l.164-.506a.085.085 0 01.164 0zM2.41 8.7l.163.506a.085.085 0 00.081.058h.533a.085.085 0 01.047.155l-.43.312a.084.084 0 00-.03.093l.164.506a.085.085 0 01-.132.094l-.43-.313a.085.085 0 00-.1 0l-.43.313a.085.085 0 01-.098 0 .085.085 0 01-.032-.094l.164-.506a.086.086 0 00-.03-.093l-.43-.312a.085.085 0 01.05-.155h.532a.086.086 0 00.081-.058l.164-.506a.085.085 0 01.162 0zM9.987 2.62l.164.506a.085.085 0 00.081.058h.531a.085.085 0 01.05.155l-.43.312a.085.085 0 00-.03.094l.164.505a.086.086 0 01-.032.094.086.086 0 01-.099 0l-.43-.313a.085.085 0 00-.1 0l-.43.313a.085.085 0 01-.13-.094l.163-.505a.084.084 0 00-.03-.094l-.43-.312a.085.085 0 01.048-.155h.53a.085.085 0 00.082-.058l.164-.506a.085.085 0 01.164 0zM4.29 3.694a.087.087 0 000 .053l.163.504a.085.085 0 01-.13.094l-.43-.313a.086.086 0 00-.1 0l-.43.313a.085.085 0 01-.131-.094l.164-.504a.087.087 0 000-.053.077.077 0 00-.021-.038c.219-.225.445-.441.677-.648l.038.116a.085.085 0 00.082.06h.531a.086.086 0 01.05.155l-.43.312a.084.084 0 00-.033.043zM1.885 7.385a.081.081 0 01-.035.059l-.43.313a.086.086 0 00-.03.093l.163.506a.085.085 0 01-.13.093l-.43-.311a.083.083 0 00-.1 0l-.339.246a11.574 11.574 0 01.549-1.418l.085.262a.086.086 0 00.08.06H1.8a.085.085 0 01.085.097zM9.987 6.726l.164.506a.085.085 0 00.081.058h.531a.085.085 0 01.05.155l-.43.312a.085.085 0 00-.03.093l.164.506a.085.085 0 01-.131.094l-.43-.313a.085.085 0 00-.1 0l-.43.313a.085.085 0 01-.13-.094l.163-.506a.084.084 0 00-.03-.093l-.43-.312a.085.085 0 01.051-.155h.531a.085.085 0 00.081-.058l.164-.506a.085.085 0 01.161 0zM6.956 6.727l.164.505a.085.085 0 00.081.058h.533a.085.085 0 01.05.155l-.43.312a.084.084 0 00-.03.094l.164.505a.085.085 0 01-.131.094l-.43-.313a.086.086 0 00-.1 0l-.43.313a.085.085 0 01-.131-.094l.164-.505a.086.086 0 00-.03-.094l-.43-.312a.085.085 0 01.05-.155h.53a.086.086 0 00.082-.058l.164-.505a.085.085 0 01.16 0zM1.42 11.783a.085.085 0 00-.03.094l.163.505a.085.085 0 01-.13.094l-.43-.312a.085.085 0 00-.1 0l-.43.314a.085.085 0 01-.131-.094l.164-.505a.084.084 0 00-.031-.094l-.43-.315a.083.083 0 01-.022-.024c0-.032.002-.064.004-.096a.082.082 0 01.068-.033h.531a.086.086 0 00.081-.06l.06-.18.105-.325a.086.086 0 01.13-.042c.015.01.026.025.032.042l.105.325.059.18a.086.086 0 00.08.06H1.8a.085.085 0 01.081.11.085.085 0 01-.03.043l-.43.313zM9.987 10.752l.164.505a.086.086 0 00.081.059h.531a.086.086 0 01.081.111.086.086 0 01-.03.043l-.43.312a.087.087 0 00-.031.094l.164.505a.086.086 0 01-.131.094l-.43-.313a.085.085 0 00-.1 0l-.43.313a.085.085 0 01-.13-.094l.163-.505a.085.085 0 00-.03-.094l-.43-.312a.085.085 0 01.051-.154h.531a.085.085 0 00.081-.059l.164-.505a.085.085 0 01.13-.041c.014.01.025.024.031.04zM6.956 10.752l.164.505a.085.085 0 00.081.059h.533a.086.086 0 01.047.154l-.43.312a.086.086 0 00-.03.094l.163.505a.085.085 0 01-.13.094l-.43-.313a.085.085 0 00-.1 0l-.43.313a.085.085 0 01-.1 0 .086.086 0 01-.032-.094l.165-.505a.087.087 0 00-.031-.094l-.43-.312a.085.085 0 01.05-.154h.531a.085.085 0 00.081-.059l.165-.505a.085.085 0 01.163 0zM3.925 10.752l.164.505a.085.085 0 00.083.059h.531a.085.085 0 01.081.111.085.085 0 01-.03.043l-.43.312a.086.086 0 00-.032.094l.161.507a.085.085 0 01-.13.093l-.43-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.131-.093l.164-.505a.086.086 0 00-.031-.094l-.43-.312a.086.086 0 01.05-.154h.53a.086.086 0 00.082-.059l.164-.505a.086.086 0 01.081-.063.085.085 0 01.083.06z"
                fill="#fff"
              />
              <path
                d="M13.453.087a11.893 11.893 0 00-4.132 1.287c-.04.02-.08.043-.12.064-.239.129-.472.266-.7.41H5.6A11.924 11.924 0 0111.794.002h.413a11.784 11.784 0 011.246.085z"
                fill="#DB1B1B"
              />
              <path
                d="M8.5 1.848a11.095 11.095 0 00-.853.592A11.962 11.962 0 006.33 3.602l.068.047c.014.01.025.026.03.043H3.34l.035-.036a12.428 12.428 0 011.372-1.218c.275-.209.562-.407.854-.592l2.9.002z"
                fill="#fff"
              />
              <path
                d="M6.24 3.694c-.293.306-.57.627-.83.962l-.08.105-.129.173-.087.269a.085.085 0 01-.081.06h-.064c-.063.093-.124.184-.184.277h-2.9A11.987 11.987 0 013.34 3.694H6.24z"
                fill="#DB1B1B"
              />
              <path
                d="M4.787 5.54l-.052.082-.04.064a12.001 12.001 0 00-.874 1.7H.92a12 12 0 01.874-1.7c.03-.047.06-.097.093-.147h2.9z"
                fill="#fff"
              />
              <path
                d="M3.82 7.385a12.633 12.633 0 00-.6 1.844H.322c.067-.285.145-.567.235-.843.107-.341.229-.675.365-1.001h2.9z"
                fill="#DB1B1B"
              />
              <path
                d="M3.234 9.418l-.066.047c-.115.531-.193 1.07-.234 1.61H.035c.047-.62.143-1.238.287-1.845h2.9l-.008.038a.085.085 0 01.02.15z"
                fill="#fff"
              />
              <path
                d="M2.901 12c0 .31.012.618.035.923h-2.9A12.027 12.027 0 010 12v-.598c0 .016.004.031.013.044 0-.032.002-.064.004-.096.005-.092.011-.182.018-.273h2.901c-.007.09-.013.181-.018.273 0 .032-.003.064-.004.096a.07.07 0 01-.01-.02c0-.005 0-.009-.002-.012v-.012V12z"
                fill="#DB1B1B"
              />
              <path
                d="M3.223 14.769H.322a11.898 11.898 0 01-.287-1.846h2.901c.047.622.143 1.239.287 1.846z"
                fill="#DBDBDB"
              />
              <path
                d="M3.82 16.614H.92C.67 16.017.47 15.4.32 14.77h2.902c.148.63.348 1.248.598 1.845z"
                fill="#C11A1A"
              />
              <path
                d="M4.787 18.46H1.886a11.909 11.909 0 01-.966-1.846h2.9c.268.643.591 1.26.967 1.846z"
                fill="#DBDBDB"
              />
              <path
                d="M6.24 20.306h-2.9a12.064 12.064 0 01-1.454-1.846h2.901c.424.661.91 1.28 1.453 1.846z"
                fill="#C11A1A"
              />
              <path
                d="M8.5 22.152H5.6a12.053 12.053 0 01-2.26-1.846h2.9a12.053 12.053 0 002.26 1.846z"
                fill="#DBDBDB"
              />
              <path
                d="M13.453 23.913c-.404.05-.811.079-1.218.087h-.47a11.927 11.927 0 01-6.167-1.846h2.901c1.5.948 3.192 1.549 4.954 1.759z"
                fill="#C11A1A"
              />
              <path
                d="M12.89.033v.135c-1.246.21-2.45.617-3.569 1.206-.04.02-.08.043-.12.064A11.821 11.821 0 007.647 2.44 11.952 11.952 0 006.33 3.602l.067.047c.015.01.026.026.031.043h-.187c-.293.306-.57.627-.83.962l-.08.105c-.044.057-.087.115-.13.174l-.087.27a.085.085 0 01-.081.059h-.064c-.063.094-.124.185-.184.278l-.052.082-.04.065A12 12 0 003.22 9.23l-.01.038a.085.085 0 01.023.149l-.066.047a11.9 11.9 0 00-.252 1.883c0 .032-.004.065-.005.097a.071.071 0 01-.01-.021c0-.004 0-.008-.002-.012V11.4v.6c0 .31.012.618.035.923H.035A12.03 12.03 0 010 12v-.598c0 .016.004.031.013.044 0-.032.002-.064.004-.096a11.906 11.906 0 011.778-5.663l.094-.147c.171-.267.353-.527.544-.779.281-.373.584-.73.906-1.067l.035-.036A12.42 12.42 0 014.746 2.44 12.368 12.368 0 016.3 1.438 11.924 11.924 0 0111.793.002h.414c.23.003.457.014.684.03z"
                fill="#32314B"
              />
              <path
                d="M5.804 1.848a.087.087 0 000 .047l.165.504a.085.085 0 01-.132.094l-.43-.312a.085.085 0 00-.1 0l-.43.312a.085.085 0 01-.133-.054 12.368 12.368 0 011.554-1.002.086.086 0 01-.033.047l-.43.312a.087.087 0 00-.03.052zM5.41 4.655l-.08.105a11.98 11.98 0 00-.129.174l.077-.234a.085.085 0 01.133-.045zM3.234 5.416l-.17.123-.26.188a.085.085 0 00-.03.094l.165.507a.086.086 0 01-.131.094l-.43-.313a.086.086 0 00-.1 0l-.43.313a.086.086 0 01-.131-.094l.165-.505a.087.087 0 00-.031-.094l-.058-.042.094-.146c.171-.267.353-.528.544-.78l.142.442a.085.085 0 00.082.059h.532a.086.086 0 01.047.154zM3.234 9.418l-.066.047-.363.265a.083.083 0 00-.031.094l.164.505a.085.085 0 01-.131.094l-.43-.313a.086.086 0 00-.1 0l-.43.313a.085.085 0 01-.131-.094l.164-.505a.085.085 0 00-.03-.094l-.43-.312a.085.085 0 01.05-.155h.532a.085.085 0 00.081-.059l.164-.505a.085.085 0 01.162 0l.165.505c.003.01.007.018.013.026a.085.085 0 00.068.033h.533a.085.085 0 01.047.155zM4.29 3.694a.087.087 0 000 .053l.163.505a.085.085 0 01-.13.093l-.43-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.131-.093l.164-.505a.087.087 0 000-.053.077.077 0 00-.021-.038c.219-.225.445-.44.677-.648l.038.116a.085.085 0 00.082.06h.531a.086.086 0 01.05.155l-.43.312a.084.084 0 00-.033.043zM1.885 7.385a.081.081 0 01-.035.059l-.43.313a.086.086 0 00-.03.093l.163.506a.085.085 0 01-.13.093l-.43-.311a.083.083 0 00-.1 0l-.339.246a11.574 11.574 0 01.549-1.418l.085.262a.086.086 0 00.08.06H1.8a.085.085 0 01.085.097zM1.42 11.783a.085.085 0 00-.03.094l.163.505a.085.085 0 01-.13.094l-.43-.312a.085.085 0 00-.1 0l-.43.314a.085.085 0 01-.131-.094l.164-.505a.084.084 0 00-.031-.094l-.43-.315a.083.083 0 01-.022-.024c0-.032.002-.064.004-.096a.082.082 0 01.068-.033h.531a.086.086 0 00.081-.06l.06-.18.105-.325a.086.086 0 01.13-.042c.015.01.026.025.032.042l.105.325.059.18a.086.086 0 00.08.06H1.8a.085.085 0 01.081.11.085.085 0 01-.03.043l-.43.313z"
                fill="#DBDBDB"
              />
              <path
                d="M2.901 11.402c0-.019.006-.037.018-.052 0 .032-.004.064-.005.096a.071.071 0 01-.01-.02c0-.005 0-.009-.002-.013v-.01zM3.925 6.726l.164.506a.085.085 0 00.083.058h.531a.085.085 0 01.05.154l-.43.313a.085.085 0 00-.03.093l.16.507a.085.085 0 01-.13.094l-.43-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.131-.094l.164-.505a.085.085 0 00-.031-.094l-.43-.312a.085.085 0 01.05-.154h.53a.085.085 0 00.082-.06l.164-.504a.085.085 0 01.164-.002z"
                fill="#fff"
              />
              <path
                d="M4.004 6.97a11.678 11.678 0 00-.549 1.417l-.091.064a.085.085 0 01-.131-.093l.164-.506a.085.085 0 00-.03-.093l-.43-.313a.081.081 0 01-.032-.094.085.085 0 01.081-.058h.53a.086.086 0 00.08-.06l.165-.505a.085.085 0 01.162 0l.081.24z"
                fill="#DBDBDB"
              />
              <path
                d="M5.44 4.698l.164.505a.085.085 0 00.081.059h.532a.085.085 0 01.05.154l-.43.312a.086.086 0 00-.031.094l.164.506a.085.085 0 01-.13.094l-.43-.312a.085.085 0 00-.1 0l-.43.312a.085.085 0 01-.132-.094l.164-.505a.084.084 0 00-.03-.094l-.429-.313a.085.085 0 01.047-.154h.531a.085.085 0 00.083-.059l.164-.505a.085.085 0 01.162 0z"
                fill="#fff"
              />
              <path
                d="M4.5 5.262h.469c-.063.093-.124.184-.184.278l-.051.082-.114-.082-.167-.124a.086.086 0 01.047-.154z"
                fill="#DBDBDB"
              />
              <path
                d="M6.956 2.62l.164.506a.085.085 0 00.082.059h.532a.085.085 0 01.047.154l-.43.312a.084.084 0 00-.03.094l.164.505a.085.085 0 01-.132.094l-.429-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.131-.094l.164-.505a.086.086 0 00-.03-.094l-.43-.312a.085.085 0 01.05-.154h.53a.085.085 0 00.082-.059l.164-.505a.085.085 0 01.163 0z"
                fill="#fff"
              />
              <path
                d="M7.054 2.922a12.172 12.172 0 00-.724.68l-.362-.263a.085.085 0 01.05-.154h.53a.086.086 0 00.082-.06l.164-.504a.085.085 0 01.162 0l.098.3z"
                fill="#DBDBDB"
              />
              <path
                d="M8.472.768l.164.505a.085.085 0 00.083.06h.53a.085.085 0 01.051.154l-.43.312a.085.085 0 00-.03.094l.16.506a.085.085 0 01-.13.094l-.43-.312a.086.086 0 00-.1 0l-.43.312a.085.085 0 01-.132-.094l.165-.505a.085.085 0 00-.031-.094l-.43-.312a.085.085 0 01.05-.154h.53a.085.085 0 00.082-.06L8.308.77a.085.085 0 01.164-.002z"
                fill="#fff"
              />
              <path
                d="M9.321 1.374l-.12.064a11.818 11.818 0 00-1.396.885l.14-.428a.087.087 0 000-.047.085.085 0 00-.033-.05l-.43-.312a.085.085 0 01.05-.154h.53a.085.085 0 00.082-.058l.164-.506a.085.085 0 01.162 0l.164.506a.085.085 0 00.085.059h.53a.083.083 0 01.072.041z"
                fill="#DBDBDB"
              />
              <path
                d="M22.561 12.759a.763.763 0 100-1.527.763.763 0 000 1.527zM20.972 12.536a.54.54 0 100-1.081.54.54 0 000 1.081z"
                fill="#E54141"
              />
            </g>
            <defs>
              <clipPath id="prefix__clip0">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </svg>
        );
    }
  }
);