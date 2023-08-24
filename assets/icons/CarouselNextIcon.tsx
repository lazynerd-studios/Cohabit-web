import { Icon } from "./IconType";

const CarouselNextIcon = ({ className, onClick }: Icon) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9333 9.68381C14.8937 9.58152 14.8342 9.48807 14.7583 9.40881L10.5917 5.24215C10.514 5.16445 10.4217 5.10281 10.3202 5.06076C10.2187 5.01871 10.1099 4.99707 10 4.99707C9.77808 4.99707 9.56525 5.08523 9.40833 5.24215C9.33063 5.31985 9.269 5.41209 9.22695 5.51361C9.1849 5.61512 9.16326 5.72393 9.16326 5.83381C9.16326 6.05573 9.25141 6.26856 9.40833 6.42548L12.1583 9.16715H5.83333C5.61232 9.16715 5.40036 9.25494 5.24408 9.41122C5.0878 9.56751 5 9.77947 5 10.0005C5 10.2215 5.0878 10.4335 5.24408 10.5897C5.40036 10.746 5.61232 10.8338 5.83333 10.8338H12.1583L9.40833 13.5755C9.33023 13.653 9.26823 13.7451 9.22592 13.8467C9.18362 13.9482 9.16183 14.0571 9.16183 14.1671C9.16183 14.2772 9.18362 14.3861 9.22592 14.4876C9.26823 14.5892 9.33023 14.6813 9.40833 14.7588C9.4858 14.8369 9.57797 14.8989 9.67952 14.9412C9.78107 14.9835 9.88999 15.0053 10 15.0053C10.11 15.0053 10.2189 14.9835 10.3205 14.9412C10.422 14.8989 10.5142 14.8369 10.5917 14.7588L14.7583 10.5921C14.8342 10.5129 14.8937 10.4194 14.9333 10.3171C15.0167 10.1143 15.0167 9.8867 14.9333 9.68381Z"
        fill="#1B17E7"
      />
    </svg>
  );
};

export default CarouselNextIcon;