<template>
    <div class="sidebar">
        <aside :class="`${isExpanded ? 'isExpanded' : ''}`">
            <div class="top_box">

                <div class="logo">
                    <img src="../../assets/Slagg_Logo_Alt_Bright.png" alt="Slagg">
                    <img id="SlaggName" src="../../assets/Slagg-Name.png" alt="SlaggName">
                </div>
           

                <div class="menu-toggle-wrap">
                    <button class="menu-toggle" @click="ToggleMenu">
                        <span class="material-symbols-outlined">login</span>
                    </button>
                </div>
            </div>
            
            <h3>Menu</h3>
            <div class="menu">
                <router-link to="/" class="button">
                    <span class="material-symbols-outlined">home</span>
                    <span class="text">Home</span>
                </router-link>
                <router-link to="/settings" class="button">
                    <span class="material-symbols-outlined">settings</span>
                    <span class="text">Settings</span>
                </router-link>
            </div>

            <!-- <div class="flex"></div>‚ -->
        
            <div class="menu">
                <router-link to="/admin" class="button">
                <span class="material-symbols-outlined">admin_panel_settings</span>
                    <span class="text">Admin</span>
                </router-link>
            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isExpanded = ref(localStorage.getItem("isExpanded") === "true")
const ToggleMenu = () => {
    isExpanded.value = !isExpanded.value;
    localStorage.setItem("isExpanded", isExpanded.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;

    background-color: var(--dark);
    color: var(--light);

    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    transition: 0.2s ease-in-out;

    #SlaggName {
        display: none;
    }

    .flex {
        flex: 1 1 0%;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2rem;
            transition: width 0.2s ease-in-out; 
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: -webkit-sticky;
        top: 0;
        transition: 0.2s ease-in-out;

        .menu-toggle {
            transition: 0.2s ease-in-out;
            .material-symbols-outlined {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-symbols-outlined {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, .button .text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            transition: 0.2s ease-in-out;
            padding: 0.5rem 1rem;

            .material-symbols-outlined {
                font-size: 2rem;
                color: var(--light);
                transition: 0.2s ease-in-out;
            }
            .text {
                color: var(--light);
                transition: 0.2s ease-in-out;
            }

            &:hover {
                background-color: var(--dark-alt);

                .material-symbols-outlined, .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                background-color: var(--dark-alt);
                border-right: 5px solid var(--primary);

                .material-symbols-outlined, .text {
                    color: var(--primary);
                }
            }
        }
    }

    .footer {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        p {
            font-size: 0.875rem;
            color: var(--grey);
        }
    }

    &.isExpanded {
        width: var(--sidebar-width);

        #SlaggName {
            display:inline-flex;
            width: 50%;
        }

        .top_box{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            align-content: stretch;
        }

        .logo {
                img {
                    width: 4rem;
                }
        }

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3, .button .text {
            opacity: 1;
        }

        .button {
            .material-symbols-outlined {
                margin-right: 1rem;
            }
        }



        .footer {
            opacity: 0;
        }
    }

    button {
        cursor: pointer;
        appearance: none;
        border: none;
        outline: none;
        background: none;
    }

    @media (max-width: 1024px) {
        position: absolute;
        z-index: 99;
    }
    .sidebar {
        flex: 0 0 250px;
        background-color: var(--dark);
        height: calc(100vh - 60px); /* Adjust based on header height */
        position: sticky;
        top: 60px; /* Adjust based on header height */
        overflow-y: auto;
    }
}
</style>