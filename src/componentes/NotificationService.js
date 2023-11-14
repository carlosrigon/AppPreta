import PushNotification from "react-native-push-notification";

class NotificationService {

    //Criar canal de notificações
    criarCanal = () => {
        PushNotification.createChannel( {
            channelId: "notificador",
            channelName: "Notificador do App Preta Arts",
            channelDescription: "Meu canal de notificações do aplicativo Preta Arts"
        },
        (created) => console.log(`createChannel returned '${created}'`)
        )
    }
    
    //Configuração do disparo de notificações
    configurar = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token)
            },

            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification)
                //navegador.navigate(notification.title)
                //notification.finish(PushNotificationIOS.FetchResult.NoData);
            }
        })
    }

    //Construir a notificação
    construirNotificAndroid = (id, title, message, data={}, options={}) => {
        return {
            id: id,
            channelId: "notificador",
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || "",
            subText: title || "",
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    //Mostrar a notificação
    mostrarNotific = (id, title, message, data={}, options={}) => {
        PushNotification.localNotification({
            ...this.construirNotificAndroid(id, title, message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || "default",
            userInteaction: false
        })
    }

    //Agendar Notificações
    agendarNotificacoes = () => {
        PushNotification.localNotificationSchedule({
            channelId: "notificador",
            title: "Cupom",
            id: 2,
            message: "Pegue seu cupons de desconto aqui! 💥 🎫",
            date: new Date(Date.now() + 60 * 1000),
            repeatType: "minute",
            repeatTime: 15
        }),

        PushNotification.localNotificationSchedule({
            channelId: "notificador",
            title: "Bateu a fome?",
            id: 3,
            message: "Venha matar sua fome no nosso APP! 🍕🍔 Temos as melhores promoções.",
            date: new Date(Date.now() + 120 * 1000),
            repeatType: "minute",
            repeatTime: 15
        }),

        PushNotification.localNotificationSchedule({
            channelId: "notificador",
            title: "Oferta!",
            id: 4,
            message: "💥 Aproveite nossa oferta relâmpago! ⌚",
            date: new Date(Date.now() + 180 * 1000),
            repeatType: "minute",
            repeatTime: 15
        })
    }

    //Passar o atributo "navigation" do react navigation para as notificações
    setNavigation = (novoNavegador) => {
        navegador = novoNavegador
    }

    //Cancelar todas as notificações
    cancelarTodasNotific = () => {
        PushNotification.cancelAllLocalNotifications();
    }

}

export const Notification = new NotificationService();