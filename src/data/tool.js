const places = [
    {    
        img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQnHyQAG3v4hzHWPHdvWcPhIxPexxgWz-F9CFbn4U0TQYs4ms1wwWkMgYrTgplwqNmwDSmPajIsVI0Guu3jex7VSw',
        id: 1,
        Name: 'Sensō-ji',
	Region: 'Tokyo',       
        Distance: '150km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 250000
        
    },
	
    {    
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRd1Je8E0DujsNagh1O5BtH6ri3n990P1g-vujhXgRuKTAOwMtQt6g9zm9t5UGlW_8nlOZdZlykugRYZvLl5Jjdw',
        id: 2,
        Name: 'Meiji Jingu',
	Region: 'Tokyo',       
        Distance: '11.3km',
        Country: 'Japan', 
        Transport: 'Bus',
        Budget: 360000
        
    },
    {    
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZWiBtlSWdFFxxE2xSJov2dxQ_ljo0gFJljhykWkYL1hM6NIWzwfd0K-ds_BeFzivnblmGvmXk-5Hr72mAXjAK5A',
        id: 3,
        Name: 'Tokyo Skytree',
	Region: 'Tokyo',       
        Distance: '8.2km',
        Country: 'Japan', 
        Transport: 'MonoRail',
        Budget: 150000
        
    },
    
    {    
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzTk79gzZgY-Vz6nzCaAqBW8Q3BquGNlosMI3Ne7GLw4KOMZFWE7T1woK2yhjbNKIqGKF65g0nb7auGVSC7oCAxQ',
        id: 4,
        Name: 'Tokyo Tower',
	Region: 'Tokyo',       
        Distance: '4.5km',
        Country: 'Japan', 
        Transport: 'MetroRail',
        Budget: 180000
        
    },
    
    {    
        img: 'https://lh5.googleusercontent.com/p/AF1QipP98fMUcuqxTOCDJy26YqkhCuDSyRv_jTUeJ2ty=w464-h260-n-k-no',
        id: 5,
        Name: 'Tokyo DisneySea',
	Region: 'Tokyo' ,      
        Distance: '17.5km',
        Country: 'Japan', 
        Transport: 'Bus',
        Budget: 100000
        
    },
    
    {    
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRpIXXec62c3k4z-5vr3ofSxe95lZH_6rRNii7VoBD78CkvkoShjWBvOsdoi-1ZPyeN_SYJoJbHelwcIVrRmUx1g',
        id: 6,
        Name: 'Fushimi Inari Taisha',
	Region: 'Kyoto',       
        Distance: '150km',
        Country: 'Japan', 
        Transport: 'train',
        Budget: 190000
        
    },
    
    {    
        img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRK_5MJBf7toKxRjL8tqFteowvTNBTDIJZB8xAzIKdkMP8pyNHmbsYJC93Jut9NNnSoKZqhK7CZaU-c3fUtkpeJvA',
        id: 7,
        Name: 'Kiyomizu-dera',
	Region: 'Kyoto',       
        Distance: '458km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 550000
        
    },
    
    {    
        img: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQBLoYKS7aMqRRrNhyz9x6HLxocYUE5m2UeWw2fcc0BdGMm1v9ZqFqv1M7ERrWwp3cFhaC3waOKavzdJdf3Dq7-sw',
        id: 8,
        Name: 'Kinkaku-ji',
	Region: 'Kyoto',       
        Distance: '464km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 350000
        
    },
    
    {    
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSptFmrvo4nZdO4-GYy4poITunq4Cy3fch9CxrK9evnGXJ2g4GXhQkiUSXxeF-UwAgwLu5VcXMbew1JbfG2SuoAkw',
        id: 9,
        Name: 'Nijō Castle',
	Region: 'Kyoto',       
        Distance: '550km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 650000
        
    },

    {    
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtmwJjT69OOEso6pQ5aHrjCYGi3RBbJoChWzjV6E-Yb2aEiw5r5M7Q5i-ovpP8d1vUWNdo32tovudo3xdFStONQ',
        id: 10,
        Name: 'Higashiyama Jisho-ji',
	Region: 'Kyoto',       
        Distance: '450km',
        Country: 'Japan', 
        Transport: 'Train',
        Budget: 250000
        
    },

    {    
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyfKb1glCHtN2YW88A9b2jSLY1LKL-QVzg4Mi4vtEps5IQzceeKe6G85GyQcDDOECqoWI6uEVYp2JU_pm_XXOe3g',
        id: 11,
        Name: 'Nishiki Market',
	Region: 'Kyoto',       
        Distance: '456km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 850000
        
    },

    {    
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTE0gJ8LSzyoIE-ErqfS7kAoIgP5KzoywbMeuZ5ouc-Zu-hBu2GF_Nm27eHk8Inny71IAlOo4_fsI9Yr77N8ZIvMg',
        id: 12,
        Name: 'Ryōan-ji',
	Region: 'Kyoto',       
        Distance: '556km',
        Country: 'Japan', 
        Transport: 'MetroRail',
        Budget: 450000
        
    },

    {    
        img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRMlwaFilXXWRDuWt198FigP1RRqVyyVd0D_-90W0l2RSsllSw--tFOu73dnzL3SZhO_kn3aEFyKS2UHSjHgdhb-g',
        id: 13,
        Name: 'Atomic Bomb Dome',
	Region: 'Hiroshima',       
        Distance: '813km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 620000
        
    },

    {    
        img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2pcT2gkRU2KZiafksB5EBVbE8AtCkjDS1OVoDwy93-WO2rnNEg8YkZ2wh3vxXcF1qeob4prnMbOE_ArzNmiJTPg',
        id: 14,
        Name: 'Peace Memorial Park - Hiroshima',
	Region: 'Hiroshima',       
        Distance: '812km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 163000
        
    },

    {    
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lzNDLk26fC6lW7Rh-HoZV8BqOOto7-YRilrkz_8wAuaGeg-7wqbjHQKV-PoJaS5hbb0S7iMAVHWKFcosWmuTQw',
        id: 15,
        Name: 'Shukkeien',
	Region: 'Hiroshima',       
        Distance: '812km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 152100
        
    },

    {    
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyVhs4tls-ako79kWYoS3kWWaVz-CbuT8A9A-pb54GpbfQRsI91JNyBwh8ihK8FKSCmzy0tKx0DULu6VNhWyimw',
        id: 16,
        Name: 'Sapporo Odori Park',
	Region: 'Sapporo',       
        Distance: '1110km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 155500
        
    },

    {    
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSFblRrR9FWOZmlbajgtq3aR40oUj8jjd3lLWPmbB-CrkHtfn6N0wGtSAAvDDY0lwDDp1l__OOU-NohD1RqWy-yCQ',
        id: 17,
        Name: 'Moerenuma Park',
	Region: 'Sapporo',       
        Distance: '1150km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 110000
        
    },

    {    
        img: 'https://lh5.googleusercontent.com/p/AF1QipM3g5H6g3BJ1LbOm4DHElIcIayGSEPaZOJEENGy=w580-h325-n-k-no',
        id: 18,
        Name: 'Sapporo Beer Museum',
	Region: 'Sapporo',       
        Distance: '1150km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 180500
        
    },

    {    
        img: 'https://lh5.googleusercontent.com/p/AF1QipM5DJSOoNwwHbqbB3GI3gVbIxuYk8U_4p2oVS9i=w580-h325-n-k-no',
        id: 19,
        Name: 'Shin-Yokohama Ramen Museum',
	Region: 'Yokohama',       
        Distance: '40.9km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 150011
        
    },

    {    
        img: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSWskT8QRqn9nsgJtZymw0SKfNB2vpCCizy3wfiLATMzs1jJiIOEFDSUiECXPh1GH5lMk6Dhj6-TFFIcBEebe-cJg',
        id: 20,
        Name: 'Yokohama Chinatown',
	Region: 'Yokohama',       
        Distance: '36.9km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 150200
        
    },

    {    
        img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSFfM9z8ix4t-vdZAP_ZpPXOA6vPJ4XlKwPVZC6F8gcoroAIcNtZchWwuhxpasW1EIFBP4akMRzym4MlGrnFMv0fw',
        id: 21,
        Name: 'Yokohama Hakkeijima Sea Paradise',
	Region: 'Yokohama',       
        Distance: '1150km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 350000
        
    },

    {    
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZeAyq2LbwvqCAQuDID9ClKOpf2v4iC1td2AIUTn_wTqEynoJp2JdHdAMFjOx5SR16864qKBhBZnaaExlpNIUdQ',
        id: 22,
        Name: 'Nagoya Castle',
	Region: 'Nagoya',       
        Distance: '350km',
        Country: 'Japan', 
        Transport: 'Bus',
        Budget: 110000
        
    },

    {    
        img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHoeYokHegGJlwQXrkdHqYxer9bvPKNbGfXccNlQkUcLBQrxMYlV5ijrg7y2qYvB82_5fvKTbSkNoC3C9qZYjtYQ',
        id: 23,
        Name: 'Atsuta Jingu',
	Region: 'Nagoya',       
        Distance: '350km',
        Country: 'Japan', 
        Transport: 'Metro',
        Budget: 152000
        
    },

    {    
        img: 'https://lh5.googleusercontent.com/p/AF1QipOJlI4Q8d-FRHUPwizEdRPASONKpN5WXgH1Zjry=w580-h325-n-k-no',
        id: 24,
        Name: 'Legoland Japan Resort',
	Region: 'Nagoya',       
        Distance: '350km',
        Country: 'Japan', 
        Transport: 'MonoRail',
        Budget: 140000
        
    },


    {    
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGLpRwEK15snwEAjBHPFvk3KJqbTpI0lkaKYZbLWvTxZR4N4Jh2tMl9Ut3F214iLo7mTDR15wuFTQfq_wpOFz0FA',
        id: 25,
        Name: 'Port Of Nagoya Public Aquarium',
	Region: 'Nagoya',       
        Distance: '350km',
        Country: 'Japan', 
        Transport: 'Shinkansen',
        Budget: 156000
        
    },



    {    
        img: 'https://lh5.googleusercontent.com/p/AF1QipOLFPEljx0cd8TlkSeSpr4ML6IvlemWNpktR3lH=w580-h325-n-k-no',
        id: 26,
        Name: 'The Tokugawa Art Museum',
	Region: 'Nagoya',       
        Distance: '350km',
        Country: 'Japan', 
        Transport: 'Metro',
        Budget: 250000
        
    },

    {    
        img: 'https://lh5.googleusercontent.com/p/AF1QipPdCc1OdxhfmQIPbluR6vvw0QOxC3Sn_MzdBPrp=w580-h325-n-k-no',
        id: 27,
        Name: 'Toyota Commemorative Museum of Industry and Technology',
	Region: 'Nagoya',       
        Distance: '351km',
        Country: 'Japan', 
        Transport: 'Trum',
        Budget: 630000
        
    },
]