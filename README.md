# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!--

https://zustand-demo.pmnd.rs/



admin Profile :
src={`${import.meta.env.VITE_LOCAL_API_URL}/api/v1/images/uploads/${admin?.image}`}

 src={admins?.image ===
                "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
                  ? admins?.image :
                admins?.image ===
                "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                  ? admins?.image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${admins?.image}`
              }


client Profile :
{`${import.meta.env.VITE_LOCAL_API_URL}/api/v1/images/uploads/${post_image}`}

src={client?.image === "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" || client?.image === "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png" ? client?.image : `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/images/uploads/${client?.image}`}


employee Profile :


user Profile :
src={userData?.image ==="https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" || userData?.image ===
                    "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                    ? userData?.image : `${import.meta.env.VITE_LOCAL_API_URL
                      }/api/v1/images/uploads/${userData?.image}`
                }

hallRoom Profile :
{`${import.meta.env.VITE_LOCAL_API_URL}/api/v1/images/uploads/${post_image}`}

paidImage Profile :

     src={product?.image ==="https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" || product?.image ===
                    "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                    ? product?.image : `${import.meta.env.VITE_LOCAL_API_URL
                      }/api/v1/images/uploads/${product?.image}`
                }


 -->
