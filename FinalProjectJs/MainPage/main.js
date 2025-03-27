




const movies = [
    {
        id:1,
        year:2019,
        img:"https://s3-alpha-sig.figma.com/img/e083/61e7/d73d35e0d3e6d70c6140c7f29890d890?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BJwfnG4x2KRH50ys1DIBUnK6wuYudv3CVToOF0Q2EsswXFlVpzUnFk7vMMIv-7nuUl2s8WM1q~iwce7xQHY4y7XcWlAtHK0NiRVeAvJ89ZywZ2iX2PyW2DXIdOogLrtlbWbFZcKiML3Z0PjOKAAdooUfJxxPFsg3KDoXcHMvm-AbQew1jVJXHzeqLIKIoeqHl4~1M~NX5C0e13PJErl54kmxmmYOBnzJwdn9dFDcs0Qd6l1vEGa00F3ntMe~g6hTjNQhtE9hlvpA813U8u5QwcWgKyRTs09mlWYtGN4QHz3s8jOi~~Y9pFQk3z-7eMk7IcOlUOOiRv9KJHeAeYtBUA__",
       
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"PG",
        title:"The Great Lands"
    },
    {
        id:2,
        year:2019,
        img:"https://s3-alpha-sig.figma.com/img/24bb/e8ec/90c6da499c868c2aad9eca2e3e7a4022?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QZSBMZtslke7Y3tzX6SZEmhR5zE6252X-Cq3xXhq6eXXuX5zKB3uLXopkN3KT6FlhDzO8pXthm8SuN0Y5yDs11W7jfbF7teQjnMXcYic3JZEKGuE6taL74sw2cVOdLPX5vLEqsyFzEj~Xtg2oD5Hgqf0~QFHU8GSrAnKvXl9fruzA78LF20qFV5nArs~3GXsWTvudFnvmFUZFbfGTfBUHlFiPWGninRDVYq-5-LDAUFDr-u0ghDhiEWc2WDEzsjm-1HQ19POnh8K4g-mmDWVR1iqU2CAD4GeOv5WWFWGxnrj0a-UsDAM2PSnHDe7oLPQ9DhnDsbEL7YmIKDw96P3Ug__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"PG",
        title:"The Diary"
    },
    {
        id:3,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/154d/80f3/f8722c6c160eead75d0a74ab442132e3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z~eSmuPVi0Q~gPc6zRkS1KDb3az6z7rpLun4yizKEyA7Ir0LRyJO~4xS9RXnSbbowmTD9DMhWjCEEXRpC4kH9jskL1GKwGDxe2ItFLW51jXHk~KKDB3ByKd7O~AoLYmgvGKbyGILybMF1SUp5Q2nQ5EP7FtPjD0nzvEOKehpVzORwQLZUDpuMoZqI0XqRGhKGFR8oQGBMy8OU~niM6WFZiNLGGIdaaIDCRcAXlPyMNyQjIOXtiiZEIjFumxg-528Uv7o2UnZ3JuD5y~ToFuhvtnRgf9gGmY7ujq64~zAf2KoG2~lG3IzT2JoiA4sHuHPnPWbolTCNCNGh2v4JEsb0Q__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"18+",
        title:"Earth's Untouched"
    },
    {
        id:4,
        year:2019,
        img:"https://s3-alpha-sig.figma.com/img/e4d9/1715/ccf4e8aa6d00c3218ab9ecb45fb2388b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ORdFfN9xR-FQ9NgGS4p3CvWlnqdKzNmuASIFgCSozIURX5Rc5oQqqe5fnNQW852WCuTy6bsSJ9JEZPX6YIkM6fXPL0SZ2zOPzv18TP1uZ6DLblkXamBr1F-eDBPxS5wiA5avTVLCbKb9m4zGXIdagluwEtICtkMeDosBa43Avy6fn1QPIcKtu2m95VxluK3u~gAZp4K3kQxSVTVrgmhvp~5PMFwN7iEO0t~MkmC97KNWQWOs5zubs2PBoEOdIyU~Tnejr~fZKAikma3OC1FUsye2mQeGY5wGtYegwhZHUFWbFjno8LcagWSxVJe83pqD2Aquf8eir1Q5hhr5UDGq~g__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"E",
        title:"No Land Beyond"
    },
    {
        id:5,
        year:2016,
        img:"https://s3-alpha-sig.figma.com/img/a3c0/d276/74ad9ff6a7af633bb7a75fbec6820e48?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cn687Um17LX1Z1a3E5W5Uxx~9fRgpRPg3XhI096VKOjkNsTeYdwkzV-aw~8smFsD8bIhOM~EA1QI85W9HzDT3~XalyJKjvtSw5fsPkOAaqMvIVCuWF5-M~vRgh9N3C1Spem4Q9-N31mQMlQ4U~BZmR2eEae8Q0L-WlhHEf6co8i5sepREqfxZ85HeDpf-KIQEmbtNQv7C3~xdDPwwyeKWcTDZsiqNlbMeweZd~wD1Eu13DavoYNIRHtDh1EVKiMEAhjfOF2VHlLqfqhdvTtAxAF3sg2Guw7y8NuNOudmu8gOn8e7ND4xX919z-dbl3D7P9LannBlQpSXmVXcJ5n~ZQ__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"PG",
        title:"During The Hunt"
    },
    {
        id:6,
        year:2019,
        img:"https://s3-alpha-sig.figma.com/img/9370/f41f/736f506d6161c1f926f92c6515cef3d5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YpeU4zTG-H64Uh4TSJzzzd6ZAux~qQrjjDuJ5Btng-ofyYzzF1134TVsoxoj7LbcflHmpIQ7PIM5IM1qGpUhZAYgjSukUSSkOLjYCH2Od49g8npUrBeu44ztsdldAbNohTppFc6Km2UjRYljF9PkuCH~6UPnLR21Vb56ZLCGVZ89k1CCoJ17qNVdvPMZN687J1OkH54zQ53ybsQqVQFpoi2xQ-DGKsHWPf--ELDGDSKBweJtsr33qABShqdBpTIdAifIpCiTzg~nhy92zdmSjLaCtVVsnMwtdYFVGAdF0yMwXzwlnpf4Dq8kOBN-R43EqvzWVPzGUYUZzIDLNBNrgw__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"PG",
        title:"Autosport The Series"
    },
    {
        id:7,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/f7c5/cbdb/1929c334aa1270550633e57dab7dcdc8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CfyorgYd10uBpA3G7ge6ThYZ7Egv442GTn-VqktsItyzSIze~9h2DiHLEQ3JJFQZu8fDe4rjBTa1qMaqyXlLNbkTr-iw72f4Kjy7fwK51nlLb5YlOTTrxWj7nutGhnInqQHNKv0PRCf8~JVV9jv6~Tifg~6FP6t2tm5NuIAx6slHNQInG1FotYGpevMdEPtrIrIwd33FFLlkXENMxyV78OzOE~WxgVvt5-q4jOVH7NWGmPOUl65Hl3SMFBm8wBw7fUP4sgjpthi7EEu~0eT5x~DzwmI0-oAO~uPWETGDEKWNKcDjb-Yluuoo9Q0qHq8jZxf~L5WMR6hU699745W5-A__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"E",
        title:"Same Answer II"
    },
    {
        id:8,
        year:2016,
        img:"https://s3-alpha-sig.figma.com/img/8932/79f1/643e5b020e786c2d8a204df77e434d02?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ACKRatcjuXkqukmf6mjxTTLc66hHPdlX~HaYvr-c~rtIGtzUA9WxXsRAOCQNSxa9IQrmDm~MaRexSnLjtibU~Ndbdq4Y7qh3zN8G5W1mmo8bBxTZ4eDpkzm08klM7hkmqGqlVSUWcp1C1Kyh9R7wxBjSscB~5bLUqfh5HkH12BU7hwqNDGvtP4y~9OdLWscQhcDaV4kgX32SP0MuAbMbc45NSJ4FQu4aSDAC9zGKpI9PU2~BH4tO9Ewvyjp~cFJCCleFZMpXrGXjwZXySKyCOqs0Vu2UOGuNPeqMaxOeCa1MgXv0YwXZr7ifMe1USYbMTTZdSkWOgRtnckiYH8fk7w__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"PG",
        title:"Below Echo"
    },
    {
        id:9,
        year:2015,
        img:"https://s3-alpha-sig.figma.com/img/a665/d243/bd5b796d8445f1a788cdd9027c18d722?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jM5qhC2xid3nOQQyVNSWm0JzvKOT7PaYs1JfXSsGJmp~eOra5CNECcfNXQESsFkbypO5uzAyIpmrLNkeWYkoh-TT-a7Vegv9zk5OL0JmfxBkF1ePFt5hjseHvKyFunop75-Xwpc3~ULwxY2paBx~ufXSaHZJSarbAYC0SevUfLqPdzaoPBRO88kLNWJ1TO5AKqg5lUu7hd-r8pXaqM4kdHRmzRV3TzQE56K98o9Fnwuz0r3NBOCorC~r9YTv2tRRWCdDC2O5Ww5Br6kjmr8le01Orn9teDZIOAlWTS5syx78jeF07r1gXJGWYhzQTIaW7JxuqZFzgjeDsyH~Vj9muw__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"E",
        title:"The Rockies"
    },
    {
        id:10,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/0371/a4e8/d3a4aacaaa6d07abbaa9b3af0c7532ed?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kwp7g4DIO152t7k6~vPZwCNMA9mrc2iAEmfPHCBy1C-ZfW053kZVKfHBPyPhMLeU5T8uNMeEvTE-el6wq-lhWm3BC2RhXY2vIX7FulQzmFpQJCxS6GkO3kkRCT~-eFZRk2tUcunPQ1RjtgcVlyzHeTVIgRxikYUwAS-JR7KkYovg-AiFlNQcP6x3tRbqiWjHvVb2z4Uj2swqsBRJDQfbzSJFP~vz2b~amTVRqeUNgiOfKtYsqjGqL5AtWB0kg849NNgiXBVgrMgjOzjlOJv1qoxHgMJjJIiEo322Bk6cm65ajyJnp85prIwpMnraIJUlE0Uc8Xxk4yJhfrfphyTWXA__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"PG",
        title:"Relentless"
    },
    {
        id:11,
        year:2018,
        img:"https://s3-alpha-sig.figma.com/img/5361/fb9c/7c73e7ceb5015ddfdc296b006e07449e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cCC346EuGTNVvxrdXzHHWNVyoyfjRYdELqpO9Wfkbbpnl68aNF4JqXtYcOepVoZ1trc~lkkzFK3bdSrO8Bv0OZLMdyWMk8OKmc1h32zG8zXwCwUkFV3PTmbwRzozV9~iO4mRkM1IYWYUUC7y64hBn15bfLMzFDZ44BohZtZuO25A4RSCQ8ltljos-me9R2b2IwPA0r-8wSpSU~bCSbTFxTEzJCm8aVtAvrUn8Kren-pwamnMutjWoPVvz7fLHrKvVFKdH~aDqFZ3-4MvsTaezFAtG7P3c2~KZCMJQwGeX1sLGROZeNX5RAAZuG~6RAzwRWyoO9dNjFGrQ2wl~Wu4oA__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"18+",
        title:"Community of Ours "
    },
    {
        id:12,
        year:2015,
        img:"https://s3-alpha-sig.figma.com/img/da7b/da23/4c5a5f663707caa41b1adf8434ebcda4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Q8nmVqifCX2Xqya~MwYMZIGamXy~C~E6981Fznyrp1yBUAHNnI~N2CAdzw25Y3AeQzyFQD1-SmfpIa0IBk6sS9~CgI0KfsjJKWrV4oHQTbdL0H-H7g0Cxwp8bAt2dFfJNwYhWDdJSvtMGiiOnYu~jks0QoHTfx9LJC6L6jVJtoOCQ0JJcJLbGAqzyXAXz4eiIqRSwo5DCvCQ~XQbWHgaSolm9OxOROlBTrpNffcEJSwUCfOcgxhiQfFHD65A2VXUkUgGk3SP93eJ2vthbXjfV4cLjz~YkXAD9geeeFg7MFq6nliEfAWFDxI~DyUiBJKstxBGVeZhK5QilwRsCv6ctg__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"PG",
        title:"Van Life"
    },
    {
        id:13,
        year:2021,
        img:"https://s3-alpha-sig.figma.com/img/2a9a/2b59/81fa982861b77688366906e7018e2813?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WYTijnQMaJtXhNK0fuw7Lxuljrul2gJ4dpbMGvKG5O~cReYZdlyzbR0hWsP9IFT9ceSdykN1ecxccoAhoKPWIWxz0cWWy6h3YdxFh9vvGnk1r-wmWoypRbIzlLX~UBpgUssvdDvJQr2N-mf9fiOH8RhQeQqofidZjHE4qh2oi92k-fsVx2CiEnEVrY9qwsd2VMa7nRhrDOXIDhZ-Gh-vmkC1OIh9cgq8g-nOdZfGz9IrgROZbNu5kYP~8kOAj4YWZgmv0ofL58jQWIS2oZyeA6kZW4OyyVt4g7oCb1DhMbTVTG690U6d9k~EkbQtT4wyh0yP80etFNAEmhteNCVffA__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"PG",
        title:"The Heiress"
    },
    {
        id:14,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/baeb/ea3e/cbf68d70d90bcb022e329d695349b5e4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cj0N2A9GBrh~mnOS21HfXanFWcEUL0BYlBKFGIXyglYZOjF~hhfAlQLnTCXj-BVfaOFZJvFkZV8KFEKq9v-aK0jQ8TLdGnvc0vFuuyhDNS9PK1WhUZHVUX~FXIcTj8SOoLBAD9ODKCD5CckPj5cBZti6s5pT1dAffChMkOTpzNbqAJpQjGiQrJ4jgcZg7wO4ddNx61odguOUhxJVasxAY~jw0G0EpNlgMT1g-fORIXAEYDFe8EJOt1NHowE-nePqVpPxLcCHtPtDyLLhkQyXzU2Et2edwTupkbIthgc5My9fCo7XwJ-Op-iSHm4R~9eaEie54OTap26MvTES19kvdA__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"18+",
        title:"Off the Track"
    },
    {
        id:15,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/812d/08aa/b7b86edc3a899e7793cb0c497a921d78?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hV-DMf0xMUXRsQLUlauxhTvHlvjFwsECyB9wJL97YUx6TLUag8fyN10HRaXIPXcT87bBz2xXhdG0~rMTSoSHphsVP0NzhTAuYpBywYqGLiQYu73OS~4CFCf4D0BXIJUXZvCz3NLUuc41A1TvaDWTbeClPkSTEeb1Uthx8FXvIaqPqu2pcezcwhAjK8ekbiEyAckbJMN1yxv7V8dyH2qVL0f7YiSSA8iTqFvcK3f89Atss7iadBH0HOmjE0Efmk1J5ZWKyfaZZouuBCl7b6E7cF5ZZCDxEuJychSvTBbEwpB78SRnVPN0W14TJu0160UTTiFCo1uD6EmeqAIL8NCspw__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"E",
        title:"Whispering Hill"
    },
    {
        id:16,
        year:2013,
        img:"https://s3-alpha-sig.figma.com/img/21ca/8b7f/38d7f40ed5576563a6a845477dbdf1be?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ABkRC2h1DwzzqvBA130hXKS0W4c5UtkseoGnoBwQtF2b1MXRp419eYs536X84ijroueS80tYPipTX6aABNaNX15JHy3U6fSi4byiLqYRykczegTLhNpDd6d4OnN~W4esRGASKAjhHy~hDhFxWfRSEqctIAcNPkZxxLOmMSlwFlVs~dgIN56nByFe2RhJkbMM1fAd1d~tBAiNwwXWpbSx6dIhJQF0RjxP9ii9YDgQpsFMr5pAvGT~uWwFEk5bBt9xJGOf~mi323Dmd2UBpRuwy28H4eEYWJeEpScHB5T9m2kDkscpGM4rmZ1Y08tprB7vPzgRIstz2ISXXPngpew7AA__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"PG",
        title:"112"
    },
    {
        id:17,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/08eb/a344/a132b75639dfa3fc1ae33030c8a78864?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IcJDAlzmvjhjPD6I9es2plEfYmhfN6RFs08BbHSXQ1IC9teLVduebRO6Wzr0cxACkl1q8mjhgGvnAxv9DnlKrloTdcCnrLRfqim59qXsk-jE2e3mUuowbwuhAduJ~CwlZ3tL6o4karMUoc9Erne~GXP5MS5OmirBkFxZhllIjIYDnkQW7KJKTIBuXqxrs-uHVRs8Q4ZYiLOo6bHqC2T-aFzjlsqsdXswo0xYqTjbL3vmtjZgUC64gCr~GJBSTF~j5CZYKhXjfWRt8lfh20v9XItKJrIHuRoMrJ-xnwo-Bmv0vOaakKg6Gc8UQaimZjpz8U94hXmGbTiuMc6mhlUh4A__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"E",
        title:"Lone Heart"
    },
    {
        id:18,
        year:2018,
        img:"https://s3-alpha-sig.figma.com/img/0a34/e669/b1d2950052397a929d5978e8755dbe37?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fbteGpay~3Gz76bVHXUIDstMI4eNFgs7IonTeDXxT2BLcTcT3RSw-vDa5Z7vAR3HRbH4mBc9s07O~IkeXkHdksW534kbeVcNXJTZOSVva8g~rSK4KduBoz-IlAYOOojtmJxWcQW61Y4wqeWkZmn7Z3ik7pRmXlDiqI-ogtlEnWnPBXdjmaI8Gbh0HIh3stdInj9VrOFE-TXMCAqv~98g0-zWSmDPMHSvxOgg5aZP65tH83oyhSq44b0jC3LlU5pdly-Z~t7XIqo5wdRuIQTRBuobxbWb8ZqKGrq8ZEKZt90SXWroZOT33nagTB2T3QlUxuM-mucmCPofk26LazOKpQ__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"PG",
        title:"Production Line"
    },
    {
        id:19,
        year:2016,
        img:"https://s3-alpha-sig.figma.com/img/ed69/337c/33289265e9f959ab2c972d56c5be87bb?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oWpvM~nxs11zz7eNWsikr9SaT9nrJPazO~hKienGeXcKn2X5Xbaojlvv91n-vCSNTLCFu0GIkKbleyRf4URBvgPtbnoNpqt7wlRYV4DctoE45NgVPo2gsjgVulUC2P4h1hBpJPM9yc1Blr17EjZp9997AhqZchjZ9kEaBBk-~n9~koyfh-fJZO2hdgUGi4U6jYr3wwjMbpnaJiuFIcYimDq9ux71j~9jqJxbsWhzebrwwDQpHpP35yFxVQ1PIxcsIcbB3Hy4YBnwYW2N1BtCPqGDH118zXlo4GonnNX8MKBh5XtbCfEf8zVlZoBItI1QiMawr28MKwvwVPBfUx3QkA__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"E",
        title:"Dogs"
    },
    {
        id:20,
        year:2020,
        img:"https://s3-alpha-sig.figma.com/img/6c6f/193f/db5aae5fbbcdd174ab493839df4d3288?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CEKewSJY72I2l6af5dnl59AjhVfPE7aKATMmCOJDfT1DedFt3vBFBDiZmHmP3qe65K03UiZwBBGI73YvbCy6zFlC7ntFy2vCgknMvPc6yEcbaUbyfFBHpI4KnoG7T6cfr0aMGbCVKZZALFVVrFDdY2ypEsLiofgCXFqJ~W4RkJEoIy2FxvUGXE1jgg9bULO6g7aurWMqE5r2W7lHqDKORQ-pKYcZcfkqTeVzby8HkQkx9jZDkYBQaFKYLNLwOjgWAE36SeZggaiB3JEOrQ3abCjh~1jtWLg3eaK9lOPX~IOp1300TTrsrc8mjBb2JdNFoDFi6gZZADuLZ1cilWDW7A__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"PG",
        title:"Asia in 24 Days"
    },
    {
        id:21,
        year:2016,
        img:"https://s3-alpha-sig.figma.com/img/6ba9/4b3d/d09039bdfbfd8ffb281c2fa93c2e1ad4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lp~jYUZCiPLbB~IZ-OemAjQ~UYiLSj8C3-jkkLep7eVmRQkFioEcx-s8trIG~zuUYdWYABhco-NP7AyCsmMtZuTx5sLlcMx~mpjRxfyRy2T0yDAOGvCZqv4wMuxj2-J8NtiBQQ-AavfbNxGGkqKBnGspIoG7MzGSvgV8kfVuzj1xuxoPXnsQOFxZ0y5vxrqKdzATbW6P13nt0zCQ90OBunI4otqst55UsYFvMp-PqbIP7vTQCNmyquV1cVvqlwn6f5lK19k4CvkOIHdHlgZYpEG0iVpxa6iRU1jRNfYC6MM9jsp7BSWexc6BHpDFgwttw9jrpfFIXKXgmm7gDTAcKg__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"PG",
        title:"The Tasty Tour"
    },
    {
        id:22,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/f059/13f7/d433bdaf43e1c08faf531ccb90fac3c4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W~tOMq~XiARL3DVIaf6c~JOylUeI7ne6C3HUJgkqFmQcHAFGO6KnSbxEjxQLtMqbPs-MqYRaSEeeu62Isap96kc-uFyBY9bIhTAROZ1wEdTs1MdTY2D-XBM-lBkMx2D3hgnNTgIDnguzVmUq38BNIAQ4VBWLVqx5pGk-mraDMdePDXIzEZsi3LaipwtNaqXMv7KBo1NxR~VZsLNi15E2SnsKf7BKrDd~n~TuSkEmVDfuR1-2QUldLOgzfOoE3oJqFnVQxrhN8mhfxDDYD7lk5OuF82tLrGH0m3oFnCPCuZn7-xQRbEu3DCC7MD2ewJwGRPkrBTI9Bgplb11qkM3jcw__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"18+",
        title:"Darker"
    },
    {
        id:23,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/acdf/564a/83cddbc3f7f9e1f949ace7e6976815b1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kmvAmDfMBAyfkHCdscOSJtqO7pCZ9qYlWUuCqTUStMN5I14S0KfGz7hI7AjrQvq6nA6ljv8bwsNnAZDGomgm83Shrir7Q~K0pQ5nlM4gyTHftzOtnJuCjFiwSktApAExPyp0gz5M6lqHIifckcTW4QuCqUrUpzTAvbP2JTlTLCPP5UyjUQ5VB6zBaNCUbvUSMTeCbiIE-x4mEeOnD1UNvSkzssHFL27oc-3JpFL2HB8LSFFx8ENq5yGt7DtVtC9~ICqBPWNC3ZvrpCg5ZLs6r31932zzJjKB~tNfslqaUmsAdhZfMyrQn~MDvXNuixLAClhXJtCCeJbNpR7RuuF~Ig__",
        emblem:"mainPNG/Shape 3 (1).png",
        type:"TV Series",
        text:"18+",
        title:"Unresolved Cases"
    },
    {
        id:24,
        year:2017,
        img:"https://s3-alpha-sig.figma.com/img/d255/e8e6/52ca4462603266063434e9d47e6cf6b8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tpn9Pm-~OSU4LEJLCFPgNWGntKZ~8XSzdQtaCwv2feukyhf0C3LJRz99Fd2r8ngIgOn1Jf-DLyBRuAmXkGxuPpal30a8Au0Muc93gmA0egVwE0wFlhduWI~RECGT-z15i-czZne7mBCqG86eRLS3H~qBvG9g8pYw8alSCa7W4VZSRT7dBpuuiLgasJ6poUKuhmCjTk7d016VcbZ1SkHpsdJXiftNYpdw2jFJlbwwdZWzC5~RFhDA9Dhh-CH~hXGDKgjoEbSZ1lJhCsRQglPR7CN3f4lcFWr8OlY5Go9IaV17tR2WnkddDT5nRf4SN7UDtD1UrE4iIKvhnx43B5lsAg__",
        emblem:"mainPNG/Shape 2.png",
        type:"Movie",
        text:"PG",
        title:"Mission: Saturn"
    },

]
document.addEventListener("DOMContentLoaded", () => {
    const recommendationContainer = document.querySelector(".main_table_recomendation_items");
    const searchInput = document.getElementById("search_input");
    const menuItems = document.querySelectorAll(".main_menu_items li");
    const favoritesMenuItem = document.querySelector(".main_menu_items_favorites");

    let favoriteMovies = new Set();
    let activeFilter = "all";

    function createMovieCard(movie) {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}" class="movie-card-image" width="280px" height="226px">
            <div class="favorite_icons">
                <img src="mainPNG/Bookmark.png" alt="favorite" class="movie-card-favoriteEmpty" width="11.67px" height="14px" style="cursor: pointer; ${favoriteMovies.has(movie.title) ? 'display: none;' : 'display: block;'}">
                <img src="mainPNG/Path (2).png" alt="favorite" class="movie-card-favoriteColored" width="11.67px" height="14px" style="cursor: pointer; ${favoriteMovies.has(movie.title) ? 'display: block;' : 'display: none;'}">
            </div>
            <div class="movie-card-info">
                <div class="movie-card-info-main">
                    <p class="movie-card-year">${movie.year}</p>
                    <img src="${movie.emblem}" alt="${movie.type}" class="movie-card-emblem" width="12px" height="12px">
                    <p class="movie-card-type">${movie.type}</p>
                    <span class="movie-card-text">${movie.text}</span>
                </div>
                <h3 class="movie-card-title">${movie.title}</h3>
            </div>
        `;
        
        const favoriteEmpty = card.querySelector(".movie-card-favoriteEmpty");
        const favoriteColored = card.querySelector(".movie-card-favoriteColored");
        
        favoriteEmpty.addEventListener("click", () => {
            favoriteMovies.add(movie.title);
            filterMovies();
        });

        favoriteColored.addEventListener("click", () => {
            favoriteMovies.delete(movie.title);
            filterMovies();
        });
        
        return card;
    }

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");
    
            activeFilter = item.dataset.filter;
            filterMovies();
        });
    });

    function displayMovies(moviesToShow) {
        recommendationContainer.innerHTML = "";

     

        moviesToShow.forEach(movie => {
            const movieCard = createMovieCard(movie);
            recommendationContainer.appendChild(movieCard);
        });
    }

    function filterMovies() {
        const query = searchInput.value.toLowerCase();
        let filteredMovies = movies.filter(movie => {
            const matchesTitle = movie.title.toLowerCase().includes(query);
            const matchesType = activeFilter === "all" || movie.type === activeFilter;
            return matchesTitle && matchesType;
        });

        if (activeFilter === "favorites") {
            filteredMovies = movies.filter(movie => favoriteMovies.has(movie.title));
        }

        displayMovies(filteredMovies);
    }

    searchInput.addEventListener("input", filterMovies);

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            activeFilter = item.dataset.filter;
            filterMovies();
        });
    });

    favoritesMenuItem.addEventListener("click", () => {
        activeFilter = "favorites";
        filterMovies();
    });

    displayMovies(movies);
});