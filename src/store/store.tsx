import { FunctionComponent, SVGProps } from "react";
import { create } from "zustand"

export interface IStoreLocalStorageData {
    name: string;
    email: string;
    phoneNumber: string;
    subscriptionPeriod: 1 | 12;
    currentStep: number;
    passedSteps: number;
    plans: IPlans[];
    activePlan: string | undefined;
    addons: IAddon[];
}

interface IPlans {
    title: string;
    price: number;
    currency: string;
    CardIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
    freeMonthsForYearlySub: number;
}

interface IAddon {
    title: string;
    description: string;
    price: number;
    isSelected: boolean;
}

export interface IStore extends IStoreLocalStorageData{
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhoneNumber: (phoneNumber: string) => void;
    setSubscriptionPeriod: (subscriptionPeriod: 1 | 12) => void;
    setCurrentStep: (step: number) => void;
    setPassedSteps: (steps: number) => void;
    setPlans: (plans: IPlans[]) => void;
    setActivePlan: (plan: string) => void;
    setAddons: (addons: IAddon[]) => void;
    clearStore: () => void;
}

const useStepFormStore = create<IStore>((set) => ({
    name: '',
    setName: (name) =>
        set((state) => ({
            ...state,
            name: name
        })),

    email: '',
    setEmail: (email) =>
        set((state) => ({
            ...state,
            email: email
        })),

    phoneNumber: '',
    setPhoneNumber: (phoneNumber) =>
        set((state) => ({
            ...state,
            phoneNumber: phoneNumber
        })),

    subscriptionPeriod: 1,
    setSubscriptionPeriod: (subscriptionPeriod) =>
        set((state) => ({
            ...state,
            subscriptionPeriod: subscriptionPeriod
        })),

    currentStep: 1,
    setCurrentStep: (step) =>
        set ((state) => ({
            ...state,
            currentStep: step
        })),

    passedSteps: 1,
    setPassedSteps: (steps) => 
        set((state) => ({
            ...state,
            passedSteps: steps
        })),

    plans: [],
    setPlans: (plans) =>
        set((state) => ({
            ...state,
            plans: plans
        })),
    
    activePlan: undefined,
    setActivePlan: (plan) =>
        set((state) => ({
            ...state,
            activePlan: plan
        })),
        
    addons: [],
    setAddons: (addons) => 
        set((state) => ({
            ...state,
            addons: addons
        })),

    clearStore: () =>
        set((state) => ({
            name: '',
            email: '',
            phoneNumber: '',
            subscriptionPeriod: 1,
            currentStep: 1,
            plans: state.plans,
            activePlan: undefined,
            addons: state.addons.map(item => ({ ...item, isSelected: false })),
        })),
}))

export default useStepFormStore